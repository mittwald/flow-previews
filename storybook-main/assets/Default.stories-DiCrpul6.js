import{r as g,j as r}from"./iframe-jaoHr1AV.js";import{R as t}from"./Rating-CojFUgwO.js";import{L as l}from"./Label-Kdaxftsp.js";import{F as R}from"./FieldError-SYu40l7i.js";import{u as h,F as b,t as F}from"./ResetButton-DAPnXDhG.js";import{B as f}from"./Button-DsyAZnvz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DyIA4Uof.js";import"./flowComponent-CrOXvTqi.js";import"./index-CR-YYcjl.js";import"./index-BFCtAlHX.js";import"./remote-CF-AY8I2.js";import"./useLocalizedStringFormatter-B75Dx9X1.js";import"./context-CW7DVTht.js";import"./RadioGroup-DZ3lMShE.js";import"./utils-CQw042JL.js";import"./FieldError-D7CvISHf.js";import"./Text-DE-JOko8.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B8e0R8nB.js";import"./useLabel-XwramTU6.js";import"./Label-Dvi8c8U4.js";import"./Hidden-BCtaYkH3.js";import"./SelectionIndicator-CFfIf2cB.js";import"./useFormValidation-B1svUyZM.js";import"./useFocus-GROhvItb.js";import"./useFocusRing-CA-tHgfv.js";import"./useControlledState-H8E68uKK.js";import"./FocusScope-B5Ctyl2K.js";import"./useFormReset-B3LvCMGn.js";import"./usePress-WaW8O6jQ.js";import"./useFocusable-Bnc4O4Ay.js";import"./VisuallyHidden-DhIewZ3I.js";import"./useFieldComponent-D-iYVveA.js";import"./useMakeFocusable-v5bGfB-u.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C4ghe_z5.js";import"./AlertIcon-BkGbvGvC.js";import"./dynamic-BZQIArQs.js";import"./ActionGroupView-DUyubtpm.js";import"./Content-CP7dqr2s.js";import"./Heading-BypYnbKw.js";import"./Heading-CGZUJUiQ.js";import"./RSPContexts-CUx4KoIL.js";import"./Text-Cs3EhNpG.js";import"./browser-gEDtR-OK.js";import"./EmulatedBoldText-DDNOwYGP.js";import"./ActionGroup-BMyaLsc1.js";import"./getActionGroupSlot-BJH_a8Yi.js";import"./useStatic-CMyMNZPZ.js";import"./Modal-B8CAdwBg.js";import"./useOverlayController-CzdtfrCF.js";import"./Overlay-B6aX1fvL.js";import"./OverlayContextProvider-CEARkGE9.js";import"./LoadingSpinner-DQaYydFO.js";import"./Dialog-COvhX_CP.js";import"./Button-DhLHtzSw.js";import"./ProgressBar-D0TA1OyO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-BDs_imrE.js";import"./Collection-CODju4Fo.js";import"./CollectionBuilder-CN9LptsI.js";import"./Separator-BHV6nvqI.js";import"./SelectionManager-C8TGpPIB.js";import"./useEvent-NPetVyFU.js";import"./useCollator-CCOGTm23.js";import"./ActionBatch-Dl5Fmp7w.js";import"./ButtonView-DldKei58.js";import"./Flex-MfsvjoaP.js";import"./useRef-Fb7B-TJZ.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
