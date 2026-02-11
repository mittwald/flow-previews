import{r as g,j as r}from"./iframe-CLJtUSH1.js";import{R as t}from"./Rating-BXT0SU77.js";import{L as l}from"./Label-CL2lxKWa.js";import{F as R}from"./FieldError-DOHJV3_t.js";import{u as h,F as b,t as F}from"./ResetButton-BLXcg6zO.js";import{B as f}from"./Button-BdSBoC_f.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-RoA_lEUP.js";import"./flowComponent-ddZp4AYb.js";import"./index-CLGZrIuY.js";import"./index-C5KxKItK.js";import"./remote-B_1lzL7i.js";import"./useLocalizedStringFormatter-DOmCW1HP.js";import"./context-DZMEEftG.js";import"./RadioGroup-DrjS93rv.js";import"./utils-DvtEjNbs.js";import"./FieldError-DZmbq2tb.js";import"./Text-COsBjVJz.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DsvsQY6J.js";import"./useLabel-DV7QK5Z-.js";import"./Label-zeGTIhsR.js";import"./Hidden-BOcIw6_e.js";import"./SelectionIndicator-Dn3j6216.js";import"./useFormValidation-vO_E-FCH.js";import"./useFocus-CAJuP4TC.js";import"./useFocusRing-lsntDLZI.js";import"./useControlledState-BRozYY3l.js";import"./FocusScope-DhCz7nLk.js";import"./useFormReset-3JYpIfMS.js";import"./usePress-bTiOWaRI.js";import"./useFocusable-DsRGTtrf.js";import"./VisuallyHidden-CPqjoTjm.js";import"./useFieldComponent-BH0Y7qa0.js";import"./useMakeFocusable-DnRdDxtz.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cdx49GPM.js";import"./AlertIcon-Gt2BTk8C.js";import"./dynamic-6if2hzUD.js";import"./useRef-C6pb-qXv.js";import"./Action-B5Dc0NVU.js";import"./context-jvIE4x8v.js";import"./useStatic-Dks4Zmqh.js";import"./browser-BMt8iY1_.js";import"./getActionGroupSlot-Dbbh_IGy.js";import"./ButtonView-DmFKtMwL.js";import"./Text-B6Fe6olk.js";import"./EmulatedBoldText-BqLHzBf0.js";import"./LoadingSpinner-D1C6LJRF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGFUplit.js";import"./ProgressBar-eED3hhac.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
