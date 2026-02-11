import{r as g,j as r}from"./iframe-C_YE0yRE.js";import{R as t}from"./Rating-Cd4H_Zh-.js";import{L as l}from"./Label-Bg9ChY99.js";import{F as R}from"./FieldError-DnihSG5_.js";import{u as h,F as b,t as F}from"./ResetButton-D2UrtdpI.js";import{B as f}from"./Button-D40FTP7t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Cxe6oNxX.js";import"./flowComponent-BmGOFz_C.js";import"./index-ChMIoTzt.js";import"./index-C1o6XGyU.js";import"./remote-C68UFTqR.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./context-BsGh4Cu8.js";import"./RadioGroup-CUDDAvCz.js";import"./utils-DHqPz2V6.js";import"./FieldError-C56-tCSc.js";import"./Text-BXWHLDC_.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-OCRgsrlm.js";import"./useLabel-C_Wx6KRi.js";import"./Label-F1_SF2kS.js";import"./Hidden-C0GYzrmR.js";import"./SelectionIndicator-DJtaN3Cu.js";import"./useFormValidation-CAUZ7uHC.js";import"./useFocus-CNnZns0Y.js";import"./useFocusRing-BwrpFxJK.js";import"./useControlledState-8IU_97yn.js";import"./FocusScope-DmUSx-ox.js";import"./useFormReset-CEMPEkJX.js";import"./usePress-DNy1k_Tf.js";import"./useFocusable-CsoKnWSE.js";import"./VisuallyHidden-DZpEB13Q.js";import"./useFieldComponent-CWA258Fl.js";import"./useMakeFocusable-gXOjzDrv.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CldvHevT.js";import"./AlertIcon-ClTjLU4k.js";import"./dynamic-DNhRkZnt.js";import"./useRef-CyvHklD5.js";import"./Action-CzLuBWBI.js";import"./context-CDhP7Jox.js";import"./useStatic-C9zmt-CB.js";import"./browser-BLJ3u5oR.js";import"./getActionGroupSlot-C_onwoh9.js";import"./ButtonView-U1F2-uB-.js";import"./Text-DHPE0I2s.js";import"./EmulatedBoldText-CeaRH1vH.js";import"./LoadingSpinner-CWKEQFJy.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DRed6E24.js";import"./ProgressBar-kMuFl8PJ.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
