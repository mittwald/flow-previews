import{r as g,j as r}from"./iframe-DiUxw81Q.js";import{R as t}from"./Rating-ufOiokjO.js";import{L as l}from"./Label-DpHnEhHE.js";import{F as R}from"./FieldError-DH3i7Cba.js";import{u as h,F as b,t as F}from"./ResetButton-DLc-3RhS.js";import{B as f}from"./Button-gnRq8NvL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DJftz4M-.js";import"./flowComponent-Doi79f5D.js";import"./index-DoB8i5PX.js";import"./index-2ROVwQvu.js";import"./remote-dRe2-fx5.js";import"./useLocalizedStringFormatter-CjhcHHQc.js";import"./context-si8TSn1j.js";import"./RadioGroup-Cbxj_Fjd.js";import"./utils-BhADjK-H.js";import"./FieldError-BKME6Hw5.js";import"./Text-CUd3ZjBr.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-kW4DkkVS.js";import"./useLabel-yn1VwYEU.js";import"./Label-Dt69EWuh.js";import"./Hidden-YWjhfZDI.js";import"./SelectionIndicator-BsyJ81fY.js";import"./useFormValidation-CsqhaN7Y.js";import"./useFocus-DSwjHrh5.js";import"./useFocusRing-BpbrWv_K.js";import"./useControlledState-DDLUXLOw.js";import"./FocusScope-moHWWkwF.js";import"./useFormReset-Cz-LaBzR.js";import"./usePress-I-WC2YFt.js";import"./useFocusable-bbwyacvB.js";import"./VisuallyHidden-Bb1j3rfU.js";import"./useFieldComponent-BFiXxBQU.js";import"./useMakeFocusable-C0LM-TxG.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-3B66Ly-F.js";import"./AlertIcon-C_aBYmlN.js";import"./dynamic-Bvqmautb.js";import"./useRef-C5iQicBg.js";import"./Action-D_TEMwel.js";import"./context-C7B1j1st.js";import"./useStatic-BoyD6q7D.js";import"./browser-DhblGL2Q.js";import"./getActionGroupSlot-DtA40Fi-.js";import"./ButtonView-DRbY-aON.js";import"./Text-CMit6jNZ.js";import"./EmulatedBoldText-WmP9Wm83.js";import"./LoadingSpinner-Rpl9g6nT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JQtyulyF.js";import"./ProgressBar-HXLQU2Vm.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
