import{j as r,r as g}from"./iframe-BIoFjWpr.js";import{R as t}from"./Rating-Chcw7trQ.js";import{L as l}from"./Label-D-wfWBos.js";import{F as R}from"./FieldError-CY5Rdgwt.js";import{u as h,F as b,t as F}from"./ResetButton-MQWJL61W.js";import{B as f}from"./Button-60lZfz3H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-EC1k16Yv.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./index-h2cI_GQ2.js";import"./remote-CdlQwHLV.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./context-CeBhVpDW.js";import"./RadioGroup-CVhJbbij.js";import"./utils-DZ7CVsEQ.js";import"./FieldError-3U-LgGLS.js";import"./Text-DporVAh2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BlXCmAsm.js";import"./useLabel-CIJOcLbZ.js";import"./Label-CY_Zdhv-.js";import"./Hidden-JTKX8Fqm.js";import"./SelectionIndicator-DDosGdOa.js";import"./useFormValidation-5Xewoqko.js";import"./useFocus-CQPopARV.js";import"./useFocusRing-C05eNqGk.js";import"./useControlledState-A9PECuda.js";import"./FocusScope-DZU3T--c.js";import"./useFormReset-DTiYdK4X.js";import"./usePress-Uox4pFjd.js";import"./useFocusable-CwNae-cD.js";import"./VisuallyHidden-iLNm3MD9.js";import"./useFieldComponent-DpF862rt.js";import"./useMakeFocusable-JQm6B7H7.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CqfZMgA0.js";import"./AlertIcon-CufExgwJ.js";import"./dynamic-BzebB2lX.js";import"./useRef-DU35bVT5.js";import"./Action-CpJIOnVf.js";import"./context-Bujl8L45.js";import"./useStatic-BOUdEr4J.js";import"./browser-BAGCYS_p.js";import"./getActionGroupSlot-NgI5MKDv.js";import"./ButtonView-D8SKXTBC.js";import"./Text-Dw86EjFX.js";import"./EmulatedBoldText-Cp_-MpAq.js";import"./LoadingSpinner-B_0T51TC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-9bxiqwiQ.js";import"./ProgressBar-gq9TT67v.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
