import{j as r,r as g}from"./iframe-CBdrHiu-.js";import{R as t}from"./Rating-Ce2vQdUb.js";import{L as l}from"./Label-BnDRrnHY.js";import{F as R}from"./FieldError-OVkxnP3X.js";import{u as h,F as b,t as F}from"./ResetButton-BCVKdw_Y.js";import{B as f}from"./Button-CvrzgGgN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-B89fpQti.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./index-DbZpFDe3.js";import"./remote-SRpD7Y2I.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./context-p6nKBAyO.js";import"./RadioGroup-B_fC8v9V.js";import"./utils-DRjcKwJb.js";import"./FieldError-hDU9I6ir.js";import"./Text-DKFtzua6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Dpu47_EF.js";import"./useLabel-CJjwA-2F.js";import"./Label-Be9V6H5h.js";import"./Hidden-72868EZD.js";import"./SelectionIndicator-CeaIsc91.js";import"./useFormValidation-BxN5Q1uu.js";import"./useFocus-BOx7sVQU.js";import"./useFocusRing-CFSl2bW1.js";import"./useControlledState-H50OY390.js";import"./FocusScope-CTh9v3q6.js";import"./useFormReset-DzYWM4EU.js";import"./usePress-BNG00Dag.js";import"./useFocusable-DA2EU5Pw.js";import"./VisuallyHidden-DNW2U5ZQ.js";import"./useFieldComponent-CkNNSE-6.js";import"./useMakeFocusable-CauPXOGo.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Be6TgPnW.js";import"./AlertIcon-DkcKW-cj.js";import"./dynamic-Cbo9i_64.js";import"./useRef-CXZeuied.js";import"./Action-CcGGE6B7.js";import"./context-RwMuvTef.js";import"./useStatic-Bx0cFIOO.js";import"./browser-DtunHlVO.js";import"./getActionGroupSlot-DGjTpfXT.js";import"./ButtonView-gSA2DBTv.js";import"./Text-vxOKNzxr.js";import"./EmulatedBoldText-xhBM3BWX.js";import"./LoadingSpinner-B7nOYR-m.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGOdyj-q.js";import"./ProgressBar-DeVRnANw.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
