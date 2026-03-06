import{r as g,j as r}from"./iframe-1Z6hWL0q.js";import{R as t}from"./Rating-BsL5cY74.js";import{L as l}from"./Label-BLX0X_A7.js";import{F as R}from"./FieldError-CSszVQO8.js";import{u as h,F as b,t as F}from"./ResetButton-DGt7cfbK.js";import{B as f}from"./Button-Up8_TRdV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CstRa6-6.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./index-OoNE8c9e.js";import"./remote-BXzLQ_GS.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./context-DCww6zBl.js";import"./RadioGroup-AMrsQ70U.js";import"./utils-B0Ub4KXD.js";import"./FieldError-CZQJbtEC.js";import"./Text-DPhytgE2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DiZWQd7A.js";import"./useLabel-B8l-Wr5R.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./SelectionIndicator-CEn-3elL.js";import"./useFormValidation-B95RxpRV.js";import"./useFocus-MFE9JzzM.js";import"./useFocusRing-EnMEiTgA.js";import"./useControlledState-DfFBi8JJ.js";import"./FocusScope-Dlwlk6_J.js";import"./useFormReset-BI-pxd56.js";import"./usePress-Bgz5j4W3.js";import"./useFocusable-BrwqamRV.js";import"./VisuallyHidden-CCJLIB7u.js";import"./useFieldComponent-DdzfuZRi.js";import"./useMakeFocusable-D9i7PqGJ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BJ3sSdkZ.js";import"./AlertIcon-Blha7MMy.js";import"./dynamic-CeVErRgL.js";import"./ActionGroupView-BsDKFWxT.js";import"./Content-BI990Rgh.js";import"./Heading-Dc2YOm8x.js";import"./Heading-BTDLHxEZ.js";import"./RSPContexts-BZtvqclp.js";import"./Text-NSg919ow.js";import"./browser-OyZXUgp8.js";import"./EmulatedBoldText-CsGTmPK_.js";import"./ActionGroup-D0Uu4uF5.js";import"./getActionGroupSlot-jkvbnKjz.js";import"./useStatic-BMrg-KZz.js";import"./Modal-DHg5t4ae.js";import"./useOverlayController-zDyCyx1O.js";import"./Overlay-DFEnDYi7.js";import"./OverlayContextProvider-BlmnF6zY.js";import"./LoadingSpinner-B9ElqUFv.js";import"./Dialog-BOSurAfE.js";import"./Button-DpyZuV_i.js";import"./ProgressBar-BV7ioShA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-0_UUlvtG.js";import"./Collection-5lvTrIT4.js";import"./CollectionBuilder-zke4D84b.js";import"./Separator-CYJUtDva.js";import"./SelectionManager-CPzu3hBL.js";import"./useEvent-B2NydoIp.js";import"./useCollator-wpyuYlTN.js";import"./ActionBatch-B4cDzNNZ.js";import"./ButtonView-CzNSGQ0T.js";import"./Flex-Vk66B6a6.js";import"./useRef-B1h6Z-hA.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
