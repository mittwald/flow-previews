import{r as g,j as r}from"./iframe-C0EFV5oe.js";import{R as t}from"./Rating-C9ty_Yt5.js";import{L as l}from"./Label-Ca7Q5rd0.js";import{F as R}from"./FieldError-Dy7dJdZa.js";import{u as h,F as b,t as F}from"./FormRootError-B3JIvYww.js";import{B as f}from"./Button-BqN-Pb_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Xp-mdAXG.js";import"./flowComponent-DYluwTXq.js";import"./index-a1BVMwGa.js";import"./index-CT8mMXvE.js";import"./remote-CJHR20lz.js";import"./useLocalizedStringFormatter-COxbXONP.js";import"./context-8WtOcV7b.js";import"./RadioGroup-HIqe-6Mf.js";import"./utils-BH6nMpvt.js";import"./FieldError-nKMDp4j0.js";import"./Text-BncBp0aM.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-3Jlnd_L4.js";import"./useLabel-C2wPJC8Z.js";import"./Label-CdL3Pj-c.js";import"./Hidden-BTRmRI8a.js";import"./SelectionIndicator-CiCpZhmm.js";import"./useFormValidation-CCqKlLu6.js";import"./useFocus-Kf_jHJpa.js";import"./useFocusRing-DMB6fTXa.js";import"./useControlledState-BnTyVv5N.js";import"./FocusScope-BRWQwIZz.js";import"./useFormReset-D0RWbzMx.js";import"./usePress-KZK5hlL_.js";import"./useFocusable-DZVtVQHs.js";import"./VisuallyHidden-BtDJhMaH.js";import"./useFieldComponent-Becw-9Qv.js";import"./useMakeFocusable-CWEoYh2T.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-dPEDb1m8.js";import"./AlertIcon-C23FUlLu.js";import"./dynamic-DNPsW2Gv.js";import"./useControlledHostValueProps-CU5liUX5.js";import"./ActionGroupView-JE6xIUi7.js";import"./Content-DuuHxM4g.js";import"./Heading-CZ1StJHC.js";import"./Heading-B3GE8mEs.js";import"./RSPContexts-DN9Cbb61.js";import"./Text-DOyzWtc3.js";import"./browser-yoNZwNd3.js";import"./EmulatedBoldText-12IhiA7q.js";import"./ActionGroup-EFGw0Sw-.js";import"./getActionGroupSlot-9D_vBtIQ.js";import"./useStatic-BaJc0e4A.js";import"./Modal-C71hUzD9.js";import"./useOverlayController-DSjMGOL2.js";import"./Overlay-Z2wG9VEn.js";import"./OverlayContextProvider-CfXne1yD.js";import"./LoadingSpinner-AXwRYWdI.js";import"./Dialog-DJ2-3VRx.js";import"./Button-DHla6nGC.js";import"./ProgressBar-BJi6WIHx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DU6ABYYb.js";import"./Collection-CeBXcKv1.js";import"./CollectionBuilder-NEfM2aTk.js";import"./Separator-Cd1GHDKW.js";import"./SelectionManager-0ETMkcPZ.js";import"./useEvent-BSnLayA0.js";import"./useCollator-Dw-CzaIq.js";import"./ActionBatch-BKp4oeCQ.js";import"./ButtonView-BsJw5G4L.js";import"./Flex-CRYKgtbH.js";import"./useRef-U_kF6P4I.js";const wr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,i as ReadOnly,a as Small,m as WithControlledValue,n as WithFieldError,p as WithForm,s as WithLabel,Ar as __namedExportsOrder,wr as default};
