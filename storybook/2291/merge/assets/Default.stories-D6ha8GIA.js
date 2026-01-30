import{j as r,r as g}from"./iframe-CGL3Ztd8.js";import{R as t}from"./Rating-D6rif40Z.js";import{L as l}from"./Label-BdVzzMHl.js";import{F as R}from"./FieldError-Bg6s6kv2.js";import{u as h,F as b,t as F}from"./ResetButton-Df-4v6uT.js";import{B as f}from"./Button-CdFi_Gvp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CMBZCdTm.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./index-eHspQkB2.js";import"./remote-DEzwzibY.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./context-BN4qQIb1.js";import"./RadioGroup-BQDvw_ZI.js";import"./utils-BPLHaINM.js";import"./FieldError-CZz7QnF8.js";import"./Text-BKxs7Hdx.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Ba7VKjcY.js";import"./useLabel-Dh-HsBYa.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./SelectionIndicator-CKCmLDiO.js";import"./useFormValidation-DhAeSygX.js";import"./useFocus-XDda6gbt.js";import"./useFocusRing-BtxSiiWP.js";import"./useControlledState-DjoZo3jd.js";import"./FocusScope-CzHXyZUV.js";import"./useFormReset-C_UBUwcF.js";import"./usePress-BpWTOkQr.js";import"./useFocusable-MZ2jhLFm.js";import"./VisuallyHidden-DvGmoJqV.js";import"./useFieldComponent-CHIggLRE.js";import"./useMakeFocusable-Cue-GwYJ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-AGSpHO8N.js";import"./AlertIcon-DM1knw9_.js";import"./dynamic-C8bvHICk.js";import"./useRef-BOtt9UAz.js";import"./Action-D7FDWjoF.js";import"./context-B-HkcFzY.js";import"./useStatic-aF_CYkuk.js";import"./browser-Dk-cIrUN.js";import"./getActionGroupSlot-D2X8q845.js";import"./ButtonView-DVA4InJ8.js";import"./Text-_sa0OuU0.js";import"./EmulatedBoldText-CAg0SlO2.js";import"./LoadingSpinner-ChXboWO2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CySqxiup.js";import"./ProgressBar-C4R_ruZv.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
