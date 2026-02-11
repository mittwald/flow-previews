import{r as g,j as r}from"./iframe-D8EpHgnQ.js";import{R as t}from"./Rating-D-POqjhl.js";import{L as l}from"./Label-cX-SxkfN.js";import{F as R}from"./FieldError-WVs7H0vD.js";import{u as h,F as b,t as F}from"./ResetButton-Bdqeh-7e.js";import{B as f}from"./Button-v3XDTDQm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-lLcAh7ID.js";import"./flowComponent-DshXN_wf.js";import"./index-eO8RjZh1.js";import"./index-CTAMatFU.js";import"./remote-DkgoZmNz.js";import"./useLocalizedStringFormatter-DVql_2Gh.js";import"./context-XjBPUYFu.js";import"./RadioGroup-G3wuOaSe.js";import"./utils-DUD9ssEU.js";import"./FieldError-EP30ks0X.js";import"./Text-BH6HQaIi.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C9f2RCk6.js";import"./useLabel-oxfSZqnP.js";import"./Label-Dl__ymiy.js";import"./Hidden-BjTu0qYx.js";import"./SelectionIndicator-DYxlXw3H.js";import"./useFormValidation-CthS1N1f.js";import"./useFocus-BoCERcfz.js";import"./useFocusRing-DyG-PWur.js";import"./useControlledState-XjABDLiW.js";import"./FocusScope-2M3u1eHn.js";import"./useFormReset-DtPxpP1_.js";import"./usePress-CilZkf8w.js";import"./useFocusable-BTi6De5a.js";import"./VisuallyHidden-maxPxeqi.js";import"./useFieldComponent-gPWDO_C1.js";import"./useMakeFocusable-DlWu793e.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CV2tVP-G.js";import"./AlertIcon-Dtjl7KDj.js";import"./dynamic-DBeHUKte.js";import"./useRef-gITyoAnd.js";import"./Action-Bqe5nSI1.js";import"./context-CfNS10y1.js";import"./useStatic-BaYU_ZGV.js";import"./browser-CYlhW0g_.js";import"./getActionGroupSlot-cFKfTxwG.js";import"./ButtonView-CR_WR_Xo.js";import"./Text-Dkvkf5JK.js";import"./EmulatedBoldText-1uP-q_AR.js";import"./LoadingSpinner-BgyqdyMI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Kox0tnC0.js";import"./ProgressBar-CUBLGiqw.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
