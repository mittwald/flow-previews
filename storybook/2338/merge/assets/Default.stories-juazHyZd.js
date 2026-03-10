import{j as r}from"./iframe-Bge_iwzq.js";import{C as n}from"./ColumnLayout-DR49IgRS.js";import{T as e}from"./TextField-BGSlbhXb.js";import{L as o}from"./Label-DsCIDP_n.js";import{T as a}from"./Text-Bo3CKbUr.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{L as l}from"./LayoutCard-DtbuHEzC.js";import{I as d}from"./InlineCode-Be2L84_U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./useControlledHostValueProps-5VhQyC8e.js";import"./useFieldComponent-DrAtnMqi.js";import"./FieldDescription-CKLwRnm1.js";import"./Button-DYq5oiR6.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./LoadingSpinner-BWNPdeXh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./Button-0WCxpm2-.js";import"./utils-rhPAe061.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./TextField-Ctm0SVNE.js";import"./FieldError-Cv0VAgMN.js";import"./Text-70WXc8nw.js";import"./RSPContexts-DPd6iTOd.js";import"./Form-YPyJtwoF.js";import"./Group-Bwp5mwlQ.js";import"./Input-BXTXjJEE.js";import"./useTextField-4W-EXSfF.js";import"./useFormReset-CAOi_S_S.js";import"./useControlledState-CyAGSHwZ.js";import"./useFormValidation-SyV8SqLU.js";import"./Label.module-CUYTf9Jc.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";const sr={title:"Structure/ColumnLayout",component:n,argTypes:{gap:{control:"inline-radio",options:["s","m","l","xl"]},columnGap:{control:"inline-radio",options:["s","m","l","xl"]},rowGap:{control:"inline-radio",options:["s","m","l","xl"]}},args:{gap:"m",columnGap:"m",rowGap:"m"},render:t=>r.jsxs(n,{...t,children:[r.jsx(e,{children:r.jsx(o,{children:"First name"})}),r.jsx(e,{children:r.jsx(o,{children:"Last name"})}),r.jsx(e,{children:r.jsx(o,{children:"Street"})}),r.jsx(e,{children:r.jsx(o,{children:"House number"})})]})},i={},m={render:t=>r.jsxs(n,{...t,m:[1,1],l:[1,1],children:[r.jsx(e,{children:r.jsx(o,{children:"First name"})}),r.jsx(e,{children:r.jsx(o,{children:"Last name"})}),r.jsxs(n,{s:[1,1],children:[r.jsx(e,{children:r.jsx(o,{children:"Street"})}),r.jsx(e,{children:r.jsx(o,{children:"House number"})})]})]})},s={render:t=>r.jsxs(n,{...t,s:[1,null],m:[2,1],l:[3,1],children:[r.jsx(l,{children:r.jsx(a,{children:p.medium})}),r.jsx(l,{children:r.jsxs(a,{children:["Hidden on size ",r.jsx(d,{children:"s"})]})})]}),globals:{backgrounds:"light"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
