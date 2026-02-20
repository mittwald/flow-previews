import{j as r}from"./iframe-BXGfha1q.js";import{C as n}from"./ColumnLayout-Ca_zPp5k.js";import{T as e}from"./TextField-CFRr_xny.js";import{L as o}from"./Label-DmvSuQEb.js";import{T as a}from"./Text-BbFupL_Y.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{L as l}from"./LayoutCard-BKisQLBC.js";import{I as d}from"./InlineCode-CAQtc5Om.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./useControlledHostValueProps-BE7xh8vi.js";import"./useFieldComponent-BBRXs3en.js";import"./FieldDescription-B2zafCFx.js";import"./Button-DfmOHFsC.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";import"./LoadingSpinner-CnywtlQ4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./Button-DxgvyAFC.js";import"./utils-DDzB-hS3.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DFEm-gMh.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocusable-DT8F95KZ.js";import"./TextField-CSKOWfiV.js";import"./FieldError-B-_MD7Je.js";import"./Text-B1oZgTuN.js";import"./RSPContexts-CG0vEblW.js";import"./Form-C11JLohN.js";import"./Group-C9lE8UeE.js";import"./Input-DlEaT4nu.js";import"./useTextField-Cyr4gso_.js";import"./useFormReset-9RWtv4Ar.js";import"./useControlledState-Wh-cgAjH.js";import"./useFormValidation-51U-qV9x.js";import"./Label.module-CUYTf9Jc.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";const sr={title:"Structure/ColumnLayout",component:n,argTypes:{gap:{control:"inline-radio",options:["s","m","l","xl"]},columnGap:{control:"inline-radio",options:["s","m","l","xl"]},rowGap:{control:"inline-radio",options:["s","m","l","xl"]}},args:{gap:"m",columnGap:"m",rowGap:"m"},render:t=>r.jsxs(n,{...t,children:[r.jsx(e,{children:r.jsx(o,{children:"First name"})}),r.jsx(e,{children:r.jsx(o,{children:"Last name"})}),r.jsx(e,{children:r.jsx(o,{children:"Street"})}),r.jsx(e,{children:r.jsx(o,{children:"House number"})})]})},i={},m={render:t=>r.jsxs(n,{...t,m:[1,1],l:[1,1],children:[r.jsx(e,{children:r.jsx(o,{children:"First name"})}),r.jsx(e,{children:r.jsx(o,{children:"Last name"})}),r.jsxs(n,{s:[1,1],children:[r.jsx(e,{children:r.jsx(o,{children:"Street"})}),r.jsx(e,{children:r.jsx(o,{children:"House number"})})]})]})},s={render:t=>r.jsxs(n,{...t,s:[1,null],m:[2,1],l:[3,1],children:[r.jsx(l,{children:r.jsx(a,{children:p.medium})}),r.jsx(l,{children:r.jsxs(a,{children:["Hidden on size ",r.jsx(d,{children:"s"})]})})]}),globals:{backgrounds:"light"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
