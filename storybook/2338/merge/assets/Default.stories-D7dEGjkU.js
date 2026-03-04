import{r as d,j as r}from"./iframe-CBpAxFwW.js";import{R as e}from"./Rating-a_ZZOsxb.js";import{L as m}from"./Label-D9Ki8i5H.js";import{F as u}from"./FieldError-0XXNPrVk.js";import{u as c,F as g,t as f}from"./ResetButton-DdOkIqmb.js";import{B as R}from"./Button-DJILh_tx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-gYJb7yiz.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./remote-Bqh6MTep.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./RadioGroup-B7ctDHh9.js";import"./utils-DlBHsIHw.js";import"./FieldError-Bok8s5mY.js";import"./Text-CVgfjhJb.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-AlqHr7_t.js";import"./useLabel-VON6CJHg.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./SelectionIndicator-DmDMXkvM.js";import"./useFormValidation-D1j-Spao.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useControlledState-cot2auG7.js";import"./FocusScope-cF8Pb5h6.js";import"./useFormReset-DcIaZXr3.js";import"./usePress-IARhWfJB.js";import"./useFocusable-YEU6YEqR.js";import"./VisuallyHidden-BLMNvyRL.js";import"./useFieldComponent-PtL7ZYGA.js";import"./useMakeFocusable-QBFUqWJs.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CKVeXFp2.js";import"./AlertIcon-DpBhbRLN.js";import"./dynamic-CE4App5Z.js";import"./ActionGroupView-CGPpf-UN.js";import"./Content-D1nnPCvX.js";import"./Heading-MOWZhQDK.js";import"./Heading-CaCePfIe.js";import"./RSPContexts-C97_Ku7o.js";import"./Text-DmIlada7.js";import"./browser-Bc0l3UGu.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./ActionGroup-CIZlagD5.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./useStatic-CDkGs2jt.js";import"./Modal-DexcMb-i.js";import"./useOverlayController-lEjhNgxt.js";import"./Overlay-DXbZZVUA.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./LoadingSpinner-kKg7jHcI.js";import"./Dialog-r9nlMSfh.js";import"./Button-B6LJ-bNf.js";import"./ProgressBar-82eG7dwm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-B4tyB_eB.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./Separator-BGJ98pV4.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./ActionBatch-BgON7N4c.js";import"./ButtonView-C6fcLE9x.js";import"./Flex-7Y4tKj0e.js";import"./useRef-DPhMCXJT.js";const zr={title:"Form Controls/Rating",component:e,args:{size:"m",isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{size:{control:"inline-radio",options:["s","m"]}},render:t=>r.jsx(e,{"aria-label":"Rating",defaultValue:2,...t,children:r.jsx(m,{children:"Rating"})})},o={},i={render:t=>r.jsxs(e,{...t,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(m,{children:"Rating"}),r.jsx(u,{children:"Please rate"})]})},a={render:t=>{const[s,p]=d.useState(4);return r.jsx(e,{...t,value:s,onChange:l=>p(parseInt(l)),children:r.jsx(m,{children:"Rating"})})}},n={render:()=>{const t=c({defaultValues:{rating:2}}),s=f();return r.jsxs(g,{form:t,onSubmit:async p=>console.log(p.rating),children:[r.jsx(s,{name:"rating",children:r.jsx(e,{children:r.jsx(m,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(R,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Or=["Default","WithFieldError","WithControlledValue","WithForm"];export{o as Default,a as WithControlledValue,i as WithFieldError,n as WithForm,Or as __namedExportsOrder,zr as default};
