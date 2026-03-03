import{r as g,j as r}from"./iframe-DhXHhh1w.js";import{R as t}from"./Rating-CrqB9J3X.js";import{L as l}from"./Label-B97zndYQ.js";import{F as R}from"./FieldError-NwdeaE8Z.js";import{u as h,F as b,t as F}from"./ResetButton-CWjyF2h3.js";import{B as f}from"./Button-DK8hND6e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Cq0bATFd.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./index-B6ijkuYI.js";import"./remote-3lBAaKOS.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./context-C0JBe_V4.js";import"./RadioGroup-DogFEeDG.js";import"./utils--GApMcJ9.js";import"./FieldError-DoyTFare.js";import"./Text-BhHd18lu.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Cr93Lgju.js";import"./useLabel-B7imI5Js.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./SelectionIndicator-p-DrZhoI.js";import"./useFormValidation-Bi2teCon.js";import"./useFocus-CCcmXvuL.js";import"./useFocusRing-C0Ptw1X0.js";import"./useControlledState-BAaAMcGs.js";import"./FocusScope-DTOX4bjf.js";import"./useFormReset-BhTKQiKR.js";import"./usePress-DuFsm5YE.js";import"./useFocusable-DaonITQz.js";import"./VisuallyHidden-B52Q2-iE.js";import"./useFieldComponent-CXGCADuw.js";import"./useMakeFocusable-Cgcvntmb.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CTc_944s.js";import"./AlertIcon-CowGyQyl.js";import"./dynamic-DY1DU2Hc.js";import"./ActionGroupView-CC4wWS41.js";import"./Content-BG0ad5lU.js";import"./Heading-W2uFhXaO.js";import"./Heading-CrXwA3a4.js";import"./RSPContexts-BISy0hbD.js";import"./Text-VjJbV_1P.js";import"./browser-DC-Dnn5c.js";import"./EmulatedBoldText-DK8yRX5h.js";import"./ActionGroup-DZhEliTp.js";import"./getActionGroupSlot-BjPF_vWV.js";import"./useStatic-Cuuv0LOE.js";import"./Modal-DAWN7CdU.js";import"./useOverlayController-BReF9zcC.js";import"./Overlay-CIG5Bv_4.js";import"./OverlayContextProvider-CWHHdI4p.js";import"./LoadingSpinner-BQo0GQZs.js";import"./Dialog-CefhgDMJ.js";import"./Button-B72XzUR4.js";import"./ProgressBar-F8Z66Kjl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-D0YkTT7M.js";import"./Collection-CjYz6Uc3.js";import"./CollectionBuilder-BLnwNesF.js";import"./Separator-YN4gslNC.js";import"./SelectionManager-DsW2owD3.js";import"./useEvent-Ceq3h06g.js";import"./useCollator-CdSsm3Cn.js";import"./ActionBatch-CBOUg1fp.js";import"./ButtonView-CA8U0oul.js";import"./Flex-DlE5ZV-j.js";import"./useRef-uAnVuJo1.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
