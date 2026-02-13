import{r as g,j as r}from"./iframe-C2cGCWBO.js";import{R as t}from"./Rating-CJv-0Hbx.js";import{L as l}from"./Label-DU1BG4Ln.js";import{F as R}from"./FieldError-DDTF9njD.js";import{u as h,F as b,t as F}from"./ResetButton-No661t4l.js";import{B as f}from"./Button-B41LUuF3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-C4LD0r9W.js";import"./flowComponent-C6jxxEVz.js";import"./index-rbmoV-yM.js";import"./index-Du1kNfMe.js";import"./remote-w8RrxnGT.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./context-2EfdQWx2.js";import"./RadioGroup-CbvYEHE0.js";import"./utils-CPzpSZL2.js";import"./FieldError-DA6JIYnG.js";import"./Text-D1LgYL-c.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C_NaUn2t.js";import"./useLabel-DicB4RC2.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./SelectionIndicator-vr7baVWi.js";import"./useFormValidation-DV5s_XV1.js";import"./useFocus-O4uYrVbU.js";import"./useFocusRing-wtbg8X8X.js";import"./useControlledState-MMDjipcl.js";import"./FocusScope-7k8F4i3d.js";import"./useFormReset-BdRaO3QH.js";import"./usePress-BrmD8Kf2.js";import"./useFocusable-DwbuT13T.js";import"./VisuallyHidden-C7EnMW_k.js";import"./useFieldComponent-D_KC3UxI.js";import"./useMakeFocusable-HLZm40Hd.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DYOBaLM3.js";import"./AlertIcon-B9QySSBk.js";import"./dynamic-DhyEqTLI.js";import"./ActionGroupView-BtuZ06wd.js";import"./Content-CCqXW7YM.js";import"./Heading-BMwLGtkc.js";import"./Heading-Dg4rLfib.js";import"./RSPContexts-YUPb13EG.js";import"./Text-D3xXIOyH.js";import"./browser-BGhQMCSV.js";import"./EmulatedBoldText-CQEy9dVT.js";import"./ActionGroup-CWoZwwxK.js";import"./getActionGroupSlot-C9frEoU7.js";import"./useStatic-DUMwmPN3.js";import"./Modal-Dch_39m9.js";import"./Overlay-BChO2yc4.js";import"./useOverlayController-CtyPLm8k.js";import"./OverlayContextProvider-BBwaePGz.js";import"./LoadingSpinner-DIaaAh-V.js";import"./Dialog-BW6BpcVd.js";import"./Button-BneP87GG.js";import"./ProgressBar-DV5MetAr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DkMjnDr5.js";import"./Collection-BNpysMuG.js";import"./CollectionBuilder-Bu0heHOT.js";import"./Separator-Dz7Bhpa-.js";import"./SelectionManager-BVOuQNja.js";import"./useEvent-Brb253L4.js";import"./useCollator-CsE89UJT.js";import"./ActionBatch-BZcBHaPT.js";import"./ButtonView-Bho7TPlx.js";import"./Flex-D4R0lKsm.js";import"./useRef-DXSgO37m.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
