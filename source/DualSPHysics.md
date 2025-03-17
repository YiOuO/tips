 # Some tips to use DualSPHysics

- import stl file and transfer
```
<drawfilestl file="CaseWavemaker2D_Structure.stl" autofill="true" advanced="true">
	<drawmove x="4" y="0" z="0" />
	<drawscale x="0.2" y="0.2" z="0.2" />
	<drawrotate angx="#xang" angy="0" angz="0" />
	<depth depthmin="#Dp*0.1" />
</drawfilestl>    
```
**or**
```
<setmkbound mk="1" />
<move x="0" y="0.0" z="0.0" />
<drawfilestl file="holeplate.stl" autofill="true" advanced="true"/>
<matrixreset />
```
- debug 
```
G:\VEM\DualSPHysics_v5.2_BETA\examples\main\20_Osdp\CaseOsDp2D_out/CaseOsDp2D G:\VEM\DualSPHysics_v5.2_BETA\examples\main\20_Osdp\CaseOsDp2D_out -dirdataout data -svres
```
- measure from a specific interval
```
set dirout2=%dirout%\measuretool
%measuretool% -dirin %diroutdata% -points CaseWavemaker2D_wg0_2D.txt -onlytype:-all,+fluid -elevation -first:2200 -last:3000 -savecsv %dirout2%/_wg1 -savevtk %dirout2%/wg1
if not "%ERRORLEVEL%" == "0" goto fail
```
- multi layers dummy particle
```
<layers vdp="0,1,2" />
```
- Set the cylindrical cross-section particles to a circular distribution
```
<setdrawmode mode="full" />
<setmkbound mk="11" />
<setfrdrawmode auto="true" />
<drawcylinder radius="0.125" mask="0">
    <point x="8" y="0" z="0" />
    <point x="8" y="0" z="1.2" />
</drawcylinder>       
```
- Damping zone
```
<damping>
    <dampingzone>
        <limitmin x="1.5" y="0" z="0" />
        <limitmax x="3" y="0" z="0" />
        <overlimit value="1" />
        <redumax value="10" />
    </dampingzone>
</damping>
```