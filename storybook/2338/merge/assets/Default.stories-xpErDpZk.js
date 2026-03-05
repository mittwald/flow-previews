import{j as r}from"./iframe-BcqfzoOA.js";import{C as n}from"./ColumnLayout-DfUqFJib.js";import{T as e}from"./TextField-DLmieK6n.js";import{L as o}from"./Label-CQjtN3Gn.js";import{T as a}from"./Text-1XRmWCfn.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{L as l}from"./LayoutCard-CwhZcvhM.js";import{I as d}from"./InlineCode-B-7Gp4iK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./useControlledHostValueProps-BWvMzPF4.js";import"./useFieldComponent-CSNqGKWj.js";import"./FieldDescription-BAMY7EMv.js";import"./Button-C2msjhlA.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./LoadingSpinner-ULzpGe8L.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./Button-CG09EaR6.js";import"./utils-Bwp7PlhH.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./TextField-KO7DCant.js";import"./FieldError-BECkkLSz.js";import"./Text-CALsrB3x.js";import"./RSPContexts-D9SkabFV.js";import"./Form-CTjpA6Q_.js";import"./Group-CA7st2Jb.js";import"./Input-Bku180kF.js";import"./useTextField-C_zoOVrm.js";import"./useFormReset-neBkOLPK.js";import"./useControlledState-DVjnE-U4.js";import"./useFormValidation-BMgNFXni.js";import"./Label.module-CUYTf9Jc.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";const sr={title:"Structure/ColumnLayout",component:n,argTypes:{gap:{control:"inline-radio",options:["s","m","l","xl"]},columnGap:{control:"inline-radio",options:["s","m","l","xl"]},rowGap:{control:"inline-radio",options:["s","m","l","xl"]}},args:{gap:"m",columnGap:"m",rowGap:"m"},render:t=>r.jsxs(n,{...t,children:[r.jsx(e,{children:r.jsx(o,{children:"First name"})}),r.jsx(e,{children:r.jsx(o,{children:"Last name"})}),r.jsx(e,{children:r.jsx(o,{children:"Street"})}),r.jsx(e,{children:r.jsx(o,{children:"House number"})})]})},i={},m={render:t=>r.jsxs(n,{...t,m:[1,1],l:[1,1],children:[r.jsx(e,{children:r.jsx(o,{children:"First name"})}),r.jsx(e,{children:r.jsx(o,{children:"Last name"})}),r.jsxs(n,{s:[1,1],children:[r.jsx(e,{children:r.jsx(o,{children:"Street"})}),r.jsx(e,{children:r.jsx(o,{children:"House number"})})]})]})},s={render:t=>r.jsxs(n,{...t,s:[1,null],m:[2,1],l:[3,1],children:[r.jsx(l,{children:r.jsx(a,{children:p.medium})}),r.jsx(l,{children:r.jsxs(a,{children:["Hidden on size ",r.jsx(d,{children:"s"})]})})]}),globals:{backgrounds:"light"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <ColumnLayout {...props} m={[1, 1]} l={[1, 1]}>
      <TextField>
        <Label>First name</Label>
      </TextField>
      <TextField>
        <Label>Last name</Label>
      </TextField>
      <ColumnLayout s={[1, 1]}>
        <TextField>
          <Label>Street</Label>
        </TextField>
        <TextField>
          <Label>House number</Label>
        </TextField>
      </ColumnLayout>
    </ColumnLayout>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <ColumnLayout {...props} s={[1, null]} m={[2, 1]} l={[3, 1]}>
      <LayoutCard>
        <Text>{dummyText.medium}</Text>
      </LayoutCard>
      <LayoutCard>
        <Text>
          Hidden on size <InlineCode>s</InlineCode>
        </Text>
      </LayoutCard>
    </ColumnLayout>,
  globals: {
    backgrounds: "light"
  }
}`,...s.parameters?.docs?.source}}};const ar=["Default","CustomValues","HiddenColumns"];export{m as CustomValues,i as Default,s as HiddenColumns,ar as __namedExportsOrder,sr as default};
