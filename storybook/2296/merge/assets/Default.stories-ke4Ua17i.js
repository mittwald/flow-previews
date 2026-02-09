import{j as r,r as g}from"./iframe-CcNHCKoB.js";import{R as t}from"./Rating-Cql83xb-.js";import{L as l}from"./Label-F2VOWZsZ.js";import{F as R}from"./FieldError-BlodrZIq.js";import{u as h,F as b,t as F}from"./ResetButton-QovA5GoB.js";import{B as f}from"./Button-DTuLbClr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DmrAmEd1.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./index-C0Ga1GvX.js";import"./remote-CVy042JL.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./RadioGroup-CvP7YEdx.js";import"./utils-NnqZ9ZBK.js";import"./FieldError--IyvMZRA.js";import"./Text-BCtKE9i4.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DRLF_vg9.js";import"./useLabel-CyCYkDRj.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./SelectionIndicator-CQiEQ8QD.js";import"./useFormValidation-PdvsTzHy.js";import"./useFocus-SYOVVSYu.js";import"./useFocusRing-C53Oh36V.js";import"./useControlledState-TVt6Qf5c.js";import"./FocusScope-_ikiXfPV.js";import"./useFormReset-CUbMVBNo.js";import"./usePress-eyc-LVl-.js";import"./useFocusable-Dm2HHW3t.js";import"./VisuallyHidden-FLGfwvrv.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./useMakeFocusable-DQdx0uvp.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CklP5D4q.js";import"./AlertIcon-DM6j3Z28.js";import"./dynamic-nNoo79J6.js";import"./useRef-Cb4CGn_K.js";import"./Action-XHgAr--T.js";import"./context-QFR9DY6D.js";import"./useStatic-BA9Xyuh5.js";import"./browser-C0P1LItQ.js";import"./getActionGroupSlot-BqdIRyOr.js";import"./ButtonView-BSq0RN-i.js";import"./Text-BmtlE-88.js";import"./EmulatedBoldText-BunH9Anl.js";import"./LoadingSpinner-B5nlxM1K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D33T_EGm.js";import"./ProgressBar-B-cW6vCD.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
