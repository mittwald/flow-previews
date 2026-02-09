import{r as g,j as r}from"./iframe-BzN-GDSV.js";import{R as t}from"./Rating-gP5Zm-7G.js";import{L as l}from"./Label-aAQCtXm8.js";import{F as R}from"./FieldError-C55-OsIs.js";import{u as h,F as b,t as F}from"./ResetButton-HvWvEm8D.js";import{B as f}from"./Button-CqLQCx50.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Dq5gBH8b.js";import"./flowComponent-D-AbKxQ-.js";import"./index-B3p9ddxp.js";import"./index-jqMu6fsr.js";import"./remote-DmyBa_Y3.js";import"./useLocalizedStringFormatter-yVJP6Ie4.js";import"./context-CV01TaOS.js";import"./RadioGroup-DehbiROT.js";import"./utils-DZiSZNRH.js";import"./FieldError-DErqUxVb.js";import"./Text-9Slz249r.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BzSZff5w.js";import"./useLabel-D4-tvGJV.js";import"./Label-CAj1yFiM.js";import"./Hidden-D9QDiB2Q.js";import"./SelectionIndicator-Clnr_8iz.js";import"./useFormValidation-Bm80HquG.js";import"./useFocus-CD9nXzJ_.js";import"./useFocusRing-DeK7XLS9.js";import"./useControlledState-VicJRSad.js";import"./FocusScope-BMhRfsbp.js";import"./useFormReset-C_nKv_ku.js";import"./usePress-CKBw2syN.js";import"./useFocusable-CZxxukff.js";import"./VisuallyHidden-DwmcGrU0.js";import"./useFieldComponent-DWIvkE7m.js";import"./useMakeFocusable-B1uOoKnt.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-_Zms_FAC.js";import"./AlertIcon-CN2JBdj6.js";import"./dynamic-CBHHoCBf.js";import"./useRef-ClXlOumO.js";import"./Action-DMSKmOJg.js";import"./context-CO_pcEBI.js";import"./useStatic-BCK3u9CD.js";import"./browser-BZan5p2Q.js";import"./getActionGroupSlot-CEsFjkmd.js";import"./ButtonView-GH3X29hF.js";import"./Text-w8Xk5tzh.js";import"./EmulatedBoldText-Bg-XhDZU.js";import"./LoadingSpinner-DwhPZLF8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CTrxkMff.js";import"./ProgressBar-BhNLuOhb.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
