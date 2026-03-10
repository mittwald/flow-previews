import{r as g,j as r}from"./iframe-C1IdntWq.js";import{R as t}from"./Rating-B_jwuSDh.js";import{L as l}from"./Label-Be-SvMDa.js";import{F as R}from"./FieldError-DsJ8c-ZE.js";import{u as h,F as b,t as F}from"./ResetButton-De-Psidt.js";import{B as f}from"./Button-mSWnhOmK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BY-3yqWN.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./index-Coy6T-Pa.js";import"./remote-DdxKfasm.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./context-CuxmdylV.js";import"./RadioGroup-BjGTDYZd.js";import"./utils-CNo0qaX0.js";import"./FieldError-DgBT4dcF.js";import"./Text-CkLpWhuM.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CijQ_R7m.js";import"./useLabel-CAzlzskU.js";import"./Label-D03EKzy1.js";import"./Hidden-MEHJLAG1.js";import"./SelectionIndicator-DffOr8wA.js";import"./useFormValidation-CloSy7V5.js";import"./useFocus-HLQCbRtK.js";import"./useFocusRing-DQuA22ZQ.js";import"./useControlledState-FuYpKfPj.js";import"./FocusScope-C2GkFJYp.js";import"./useFormReset-CaX1fgpZ.js";import"./usePress-BIzz4kJt.js";import"./useFocusable-Z0Y9nSjp.js";import"./VisuallyHidden-709t6SxP.js";import"./useFieldComponent-o_u9PYdj.js";import"./useMakeFocusable-C1xyaFac.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-LATyc42T.js";import"./AlertIcon-CvmjcNLC.js";import"./dynamic-CUpn0zgH.js";import"./ActionGroupView-U73m2CoE.js";import"./Content-BSdmmpR7.js";import"./Heading-CLkS-w3U.js";import"./Heading-BVXFLwsq.js";import"./RSPContexts-DcVP09I4.js";import"./Text-W7h8_LNr.js";import"./browser-WXx3m9ky.js";import"./EmulatedBoldText-COIRRGWk.js";import"./ActionGroup-BahMWm8O.js";import"./getActionGroupSlot-JkJsMZpG.js";import"./useStatic-CDGCPgxo.js";import"./Modal-Cd8QIcZl.js";import"./useOverlayController-DbY_Tl3x.js";import"./Overlay-vUOl12kW.js";import"./OverlayContextProvider-Car-oabl.js";import"./LoadingSpinner-C4dBxxC2.js";import"./Dialog-DaGSiRkj.js";import"./Button-C7cBjDhV.js";import"./ProgressBar-B94oTEu8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DbaAbVnX.js";import"./Collection-C0olx5yt.js";import"./CollectionBuilder-ARpC-11z.js";import"./Separator-B7Oy5oGV.js";import"./SelectionManager-DepyWfPp.js";import"./useEvent-C_lXtwpa.js";import"./useCollator-BHhXYjcX.js";import"./ActionBatch-VQdQXkn7.js";import"./ButtonView-UjagI0v2.js";import"./Flex-DyCVhYjZ.js";import"./useRef-m9duQCt_.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
