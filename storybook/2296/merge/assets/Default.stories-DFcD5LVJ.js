import{j as r,r as g}from"./iframe-DdPUg3l1.js";import{R as t}from"./Rating-BfpEKI-P.js";import{L as l}from"./Label-CBiKyrhF.js";import{F as R}from"./FieldError-Brd6jVZQ.js";import{u as h,F as b,t as F}from"./ResetButton-Bs1fiSSt.js";import{B as f}from"./Button-BArDp6jY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CBjvo3Bl.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./index-DfF1Hh-7.js";import"./remote-C_Lvi_2k.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./context-eo9HPzgD.js";import"./RadioGroup-DQZyvefe.js";import"./utils-CZc2hRnH.js";import"./FieldError-DDOFx421.js";import"./Text-JRLUlLnO.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-0LpxOP9r.js";import"./useLabel-DfTMKk9x.js";import"./Label-DhA6S4Mt.js";import"./Hidden-9XxNu-Hn.js";import"./SelectionIndicator-DB3-93Os.js";import"./useFormValidation-ChceI0Vn.js";import"./useFocus-DOBDf5za.js";import"./useFocusRing-B1QHji0w.js";import"./useControlledState-vD92hbDx.js";import"./FocusScope-DY6t_O03.js";import"./useFormReset-B7Z_bYQn.js";import"./usePress-C4aurJT7.js";import"./useFocusable-Dd42TuHo.js";import"./VisuallyHidden-DYHUXKrU.js";import"./useFieldComponent-CO5pYfeq.js";import"./useMakeFocusable-9Pps4Z9m.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Ds6Oj97F.js";import"./AlertIcon-PzDvVuZo.js";import"./dynamic-nfXH0DAB.js";import"./useRef-eASsJvtI.js";import"./Action-C8Qj_gPz.js";import"./context-Dvh-zisW.js";import"./useStatic-BSymBvZm.js";import"./browser-CdIpgqNn.js";import"./getActionGroupSlot-WBqMZ1Fi.js";import"./ButtonView-BofU8H8L.js";import"./Text-DjGrgiDc.js";import"./EmulatedBoldText-DdQb5yyc.js";import"./LoadingSpinner-CrAIHNN2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CezSw_uu.js";import"./ProgressBar-CbaeLh44.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
