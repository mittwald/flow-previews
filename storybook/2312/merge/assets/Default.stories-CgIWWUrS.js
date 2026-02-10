import{r as g,j as r}from"./iframe-CLDMeli7.js";import{R as t}from"./Rating-CGA3Ur_j.js";import{L as l}from"./Label-B6NnPYhK.js";import{F as R}from"./FieldError-DepvOCr4.js";import{u as h,F as b,t as F}from"./ResetButton-B9K5TeM3.js";import{B as f}from"./Button-BzVheXKP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-p4W4x8Yn.js";import"./flowComponent-oV-3iEWg.js";import"./index-qO7MtLeC.js";import"./index-9eDA9WpJ.js";import"./remote-B4IT0gy2.js";import"./useLocalizedStringFormatter-BL7vQ06a.js";import"./context-CJeO-2nS.js";import"./RadioGroup-D-hatQor.js";import"./utils-CeJP1xg2.js";import"./FieldError-DzENXQGA.js";import"./Text-Doo8ujkC.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BccCs6cg.js";import"./useLabel-BXv9j1Wx.js";import"./Label-CvZQpZvf.js";import"./Hidden-B_4q2AdF.js";import"./SelectionIndicator-DBZDkcHI.js";import"./useFormValidation-DfHAcEvH.js";import"./useFocus-DccW9XIs.js";import"./useFocusRing-D-0mJeTX.js";import"./useControlledState-DtGWcuCb.js";import"./FocusScope-CDi_kcpI.js";import"./useFormReset-BkQU1ELB.js";import"./usePress-5-cRdm9R.js";import"./useFocusable-B-HKy_Nj.js";import"./VisuallyHidden--NZ_Ses-.js";import"./useFieldComponent-BtEJhhry.js";import"./useMakeFocusable-D1PLeabQ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-tt9Tj7ZR.js";import"./AlertIcon-BgEbwDh4.js";import"./dynamic-CQUXTbxb.js";import"./useRef-DgpT8kFB.js";import"./Action-B36_bDyV.js";import"./context-ZEvjkl_L.js";import"./useStatic-CZ7UkCej.js";import"./browser-DchrXhwC.js";import"./getActionGroupSlot-C0uwUGhO.js";import"./ButtonView-DsZzpVxf.js";import"./Text-CP7Ip6pC.js";import"./EmulatedBoldText-B7dHFZ_g.js";import"./LoadingSpinner-DoDeCRPK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DkOX4zii.js";import"./ProgressBar-DFW8NzQ8.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
