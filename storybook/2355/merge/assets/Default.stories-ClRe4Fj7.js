import{r as g,j as r}from"./iframe-BgKMnsqP.js";import{R as t}from"./Rating-DMDfeQNT.js";import{L as l}from"./Label-8eLvO5Vl.js";import{F as R}from"./FieldError-C-lZWEzn.js";import{u as h,F as b,t as F}from"./ResetButton-COmaz_iZ.js";import{B as f}from"./Button-BtfzhoC2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-LAZRyVR3.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./index-Cjd0WNlk.js";import"./remote-BqVO6mjn.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./context-bU_PoVUz.js";import"./RadioGroup-BrY6XBh1.js";import"./utils-DF7rIzyn.js";import"./FieldError-DrPRBP1_.js";import"./Text-DxRa_Q_m.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BeISznmy.js";import"./useLabel-cKqQKm7D.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./SelectionIndicator-Uu23SvC3.js";import"./useFormValidation-BuWufY-j.js";import"./useFocus-rZbUMOOr.js";import"./useFocusRing-Do_SyrKm.js";import"./useControlledState-CIyJs2jp.js";import"./FocusScope-CnP7IT5L.js";import"./useFormReset-BD4Q_TlS.js";import"./usePress-BRD_gMdl.js";import"./useFocusable-D4mYKpyk.js";import"./VisuallyHidden-CtgyRlvv.js";import"./useFieldComponent-BrPuybAK.js";import"./useMakeFocusable-DrNDEFBk.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-bVfxlZAe.js";import"./AlertIcon-CcDG2G1r.js";import"./dynamic-EDiDAp0E.js";import"./ActionGroupView-Clwct5K6.js";import"./Content-CbjXc6mW.js";import"./Heading-Dr5lCRWs.js";import"./Heading-DVJa8yG2.js";import"./RSPContexts-DOCQ2POG.js";import"./Text-C3i_8DOD.js";import"./browser-CrtXW1Io.js";import"./EmulatedBoldText-CGtkaQmh.js";import"./ActionGroup-Baw08tLW.js";import"./getActionGroupSlot-DyZ1DXI5.js";import"./useStatic-BGwbdR9P.js";import"./Modal-Bb86vIfw.js";import"./useOverlayController-D55f6wXT.js";import"./Overlay-jspJFumx.js";import"./OverlayContextProvider-B2u_rHsg.js";import"./LoadingSpinner-CVpmlYAZ.js";import"./Dialog-BWmXoaKF.js";import"./Button-CpsY86Gq.js";import"./ProgressBar-BWgoyrrO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-5gMuSGka.js";import"./Collection-DFA5r9t5.js";import"./CollectionBuilder-f0lBOmxU.js";import"./Separator-nr_f8Y_b.js";import"./SelectionManager-DVR2wm8O.js";import"./useEvent-y3i9KFGu.js";import"./useCollator-Dqx-tu-j.js";import"./ActionBatch-4ndP-n8L.js";import"./ButtonView-DXAFCp_d.js";import"./Flex-Cg9PpE8E.js";import"./useRef-B-um_LIx.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
