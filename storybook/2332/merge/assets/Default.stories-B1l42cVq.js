import{r as g,j as r}from"./iframe-B-dt22EB.js";import{R as t}from"./Rating-CWNTNk37.js";import{L as l}from"./Label-DPQ9pprY.js";import{F as R}from"./FieldError-B26pZzZe.js";import{u as h,F as b,t as F}from"./ResetButton-MnQ1Aqia.js";import{B as f}from"./Button-Cfktl1nd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BbozUbXF.js";import"./flowComponent-etctvabC.js";import"./index-DAMyqNwe.js";import"./index-D5JlC3xK.js";import"./remote-D6Q14pEz.js";import"./useLocalizedStringFormatter-CCZK-pLP.js";import"./context--H9enp2q.js";import"./RadioGroup-BZsFQHJ6.js";import"./utils-DoxtMd58.js";import"./FieldError-BkuObk6W.js";import"./Text-vBmBwiIT.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DTBJD-53.js";import"./useLabel-BKpYilGg.js";import"./Label-FcJtXcx4.js";import"./Hidden-bM58ni_l.js";import"./SelectionIndicator-Di9XKJuy.js";import"./useFormValidation-Ds3P2hMN.js";import"./useFocus-9GLlZYuH.js";import"./useFocusRing-6FfHDt87.js";import"./useControlledState-jk51FjyI.js";import"./FocusScope-CfFOF-ar.js";import"./useFormReset-BwldCtpD.js";import"./usePress-CgYKrzfD.js";import"./useFocusable-C0Z9ZNeY.js";import"./VisuallyHidden-CZH0CwBW.js";import"./useFieldComponent-D2j3Q6-m.js";import"./useMakeFocusable-BohdreJR.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DjlqIQ0W.js";import"./AlertIcon-B1kQf0Ru.js";import"./dynamic-Ci7OcZKZ.js";import"./ActionGroupView-8d9OW_FE.js";import"./Content-CkcxiEPO.js";import"./Heading-8-mNxmV-.js";import"./Heading-jN8dhiFm.js";import"./RSPContexts-pIsu_52Z.js";import"./Text-BCqKdXYs.js";import"./browser-CJi_ki0i.js";import"./EmulatedBoldText-fVR6kGZs.js";import"./ActionGroup-CPsTx0wa.js";import"./getActionGroupSlot-DUUveJ77.js";import"./useStatic-CMEoTlaq.js";import"./Modal-DawRBJrb.js";import"./useOverlayController-CgZod_MY.js";import"./Overlay-M9oVh3ML.js";import"./OverlayContextProvider-COc2hxmN.js";import"./LoadingSpinner-ISzATTs8.js";import"./Dialog-C7TrFuKD.js";import"./Button-CjYcjBnT.js";import"./ProgressBar-Cko_rEpF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Drn8uqTb.js";import"./Collection-Dsfmn2f2.js";import"./CollectionBuilder-D1rtQOhv.js";import"./Separator-CiuJS_mH.js";import"./SelectionManager-11E2v_vu.js";import"./useEvent-BnoPZq-r.js";import"./useCollator-Bf7H5Mv5.js";import"./ActionBatch-DMUImU48.js";import"./ButtonView-DMF5dkJg.js";import"./Flex-C5vlWmVo.js";import"./useRef-BONyqAVJ.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const wr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,i as ReadOnly,a as Small,m as WithControlledValue,n as WithFieldError,p as WithForm,s as WithLabel,wr as __namedExportsOrder,kr as default};
