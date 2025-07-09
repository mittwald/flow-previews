import{j as r}from"./iframe-DdrpCK7O.js";import{N as o}from"./NumberField-DvTnEj-g.js";import{L as t}from"./Label-icuqrMlJ.js";import{F as u}from"./FieldDescription-Bk8ggkBm.js";import{F as c}from"./FieldError-CvYAv6kd.js";import{C as g,a as x}from"./ContextualHelpTrigger-BAGLEiRB.js";import{B as b}from"./Button-DMAlCpIp.js";import{T as h}from"./Text-CaSL42bb.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B-M9Ok3D.js";import"./mergeRefs-Bbw3w7Zz.js";import"./index-7qYBiH1_.js";import"./IconWarning-lf4U_i6L.js";import"./ReactAriaControlledValueFix-DfJe_EDn.js";import"./utils-jbl8fYpp.js";import"./Button-TD7SThT2.js";import"./ProgressBar-DX53PXke.js";import"./Label-q6ExZamY.js";import"./Hidden-YoIeoCE-.js";import"./filterDOMProps-CrrfCvhk.js";import"./useLabel-BGrVe235.js";import"./context-BHbmanCt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-wge_TV6C.js";import"./useFocus-DysN_qPg.js";import"./useFocusRing-BnOgNpG6.js";import"./useFocusable-CpPH01B7.js";import"./FieldError-ENGkQJvk.js";import"./Text-Diya8EQq.js";import"./Form-BaMTKeVV.js";import"./Group-7fH98enb.js";import"./Input-BQD-OzUK.js";import"./useControlledState-N3OdDP8Q.js";import"./useSpinButton-BZTtxx4x.js";import"./useLocalizedStringFormatter-DTJzl0HQ.js";import"./useFormReset-CJ-aoIOb.js";import"./useEvent-Bo6FRXFm.js";import"./useTextField-UqnMDVeR.js";import"./Popover-BNdbeYA0.js";import"./DialogTriggerView-B77w19zZ.js";import"./context-CvEBZO7B.js";import"./useStatic-BgXEq_zL.js";import"./Dialog-B-Srzcok.js";import"./RSPContexts-C1d3DcZT.js";import"./OverlayArrow-Igqyksxq.js";import"./Collection-DaGxWABD.js";import"./CollectionBuilder-BFjTWE8q.js";import"./Separator-DpbYnmTZ.js";import"./SearchField-Noy99wMh.js";import"./TextField-l3Z8KRyH.js";import"./SelectionManager-D2bv-DGd.js";import"./useCollator-uOsZKEYD.js";import"./FocusScope-DAuqHH8A.js";import"./VisuallyHidden--_7cmU_k.js";import"./LoadingSpinner-MRX8b_Xd.js";import"./browser-CJKA82in.js";import"./EmulatedBoldText-BlAgkMNP.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:F("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(u,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(g,{children:[r.jsx(b,{ariaSlot:null}),r.jsx(x,{children:r.jsx(h,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};const Cr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithUnit,Cr as __namedExportsOrder,Vr as default};
