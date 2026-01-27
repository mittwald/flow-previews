import{j as r,r as g}from"./iframe-EUG4rdOg.js";import{R as t}from"./Rating-lO_CtRB3.js";import{L as l}from"./Label-CkXKJRQj.js";import{F as R}from"./FieldError-D_yigqvG.js";import{u as h,F as b,t as F}from"./ResetButton-CYKdI8jW.js";import{B as f}from"./Button-CEake6G1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CN_aXaJM.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./index-Dmbpubym.js";import"./remote-Bl5KctCq.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./context-DxYQrQkA.js";import"./RadioGroup-UdHUdszv.js";import"./utils-DJPQq0Ir.js";import"./FieldError-CVa256dc.js";import"./Text-BNRjjFE0.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DdP99ZP3.js";import"./useLabel-Ddt3ftMp.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./SelectionIndicator-CBEc_uRa.js";import"./useFormValidation-OWtbzU_T.js";import"./useFocus-Ca80QzG_.js";import"./useFocusRing-pMATsfPY.js";import"./useControlledState-DorIVmrH.js";import"./FocusScope-BEv8tYIC.js";import"./useFormReset-BWBNxDQ8.js";import"./usePress-CyxS_pZ-.js";import"./useFocusable-YuTP7Rcp.js";import"./VisuallyHidden-DwLUyGt6.js";import"./useFieldComponent-Bs969hQl.js";import"./useMakeFocusable-C1Hl-BRR.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D2qcucoC.js";import"./AlertIcon-C4O6kAyM.js";import"./dynamic-B-NoN6qZ.js";import"./useRef-oohqBRQZ.js";import"./Action-DJ1WPhSw.js";import"./context-B_Qm6y3p.js";import"./useStatic-uvHDPGza.js";import"./browser-Dr5hWFfi.js";import"./getActionGroupSlot-nY47Clec.js";import"./ButtonView-BC_ryqYl.js";import"./Text-DlICJI4S.js";import"./EmulatedBoldText-wvGqieyl.js";import"./LoadingSpinner-CJqmAtLp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-_TVwxj4G.js";import"./ProgressBar-CixwbPNP.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      rating: number;
    }>({
      defaultValues: {
        rating: 2
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={async v => console.log(v.rating)}>
        <Field name="rating">
          <Rating>
            <Label>Rating</Label>
          </Rating>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const jr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,s as ReadOnly,a as Small,m as WithControlledValue,i as WithFieldError,p as WithForm,n as WithLabel,jr as __namedExportsOrder,xr as default};
