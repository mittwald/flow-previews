import{r as g,j as r}from"./iframe-DeaTJDua.js";import{R as t}from"./Rating-BMCGlLY6.js";import{L as l}from"./Label-DJdPs_mv.js";import{F as R}from"./FieldError-1N6EvFt7.js";import{u as h,F as b,t as F}from"./ResetButton-dguijozO.js";import{B as f}from"./Button-Cbxy7DVV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Bnohnd1u.js";import"./flowComponent-De56C_b5.js";import"./index-6wTRmFp1.js";import"./index-BmNXFkrE.js";import"./remote-4WWdz0S_.js";import"./useLocalizedStringFormatter-DUet38b8.js";import"./context-DpHy2B7Z.js";import"./RadioGroup-sjK7CaIU.js";import"./utils-DAn_19Le.js";import"./FieldError-BF0ggQ3i.js";import"./Text-D55T9z4A.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BdU1booJ.js";import"./useLabel-C4fGorSC.js";import"./Label-Cq9BvoI9.js";import"./Hidden-DSflBmUF.js";import"./SelectionIndicator-C0I4_uDy.js";import"./useFormValidation-Ca3G17wV.js";import"./useFocus-DwX8c8hl.js";import"./useFocusRing-CR3AbbfB.js";import"./useControlledState-CvKG4MPs.js";import"./FocusScope-CpKBh6MC.js";import"./useFormReset-UTIDwNo9.js";import"./usePress-BGs6tBRd.js";import"./useFocusable-DXFTvAH_.js";import"./VisuallyHidden-BMpCP5yc.js";import"./useFieldComponent-Bk8CgTUl.js";import"./useMakeFocusable-DOYd7nHS.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CNiFry47.js";import"./AlertIcon-KKj1r8Dh.js";import"./dynamic-_cZQrmBt.js";import"./ActionGroupView-ZKtugs6_.js";import"./Content-CLiYZXIJ.js";import"./Heading-DNOFGRof.js";import"./Heading-Bb4nX13J.js";import"./RSPContexts-n2YtmRLP.js";import"./Text-DmX-Z1ax.js";import"./browser-DgW11PhP.js";import"./EmulatedBoldText-cuvIuyGo.js";import"./ActionGroup-BydBbbmr.js";import"./getActionGroupSlot-DiYPO2W1.js";import"./useStatic-Die7f9lk.js";import"./Modal-D3vemkDI.js";import"./Overlay-C4R6Qd88.js";import"./useOverlayController-DRqv1s8t.js";import"./OverlayContextProvider-BQrHrXvy.js";import"./LoadingSpinner-tY2JT6X0.js";import"./Dialog-BDRpw9MJ.js";import"./Button-CkcG2vDz.js";import"./ProgressBar-GULdM67U.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-seoLwAns.js";import"./Collection-BBtX_wi9.js";import"./CollectionBuilder-B2bzNwzm.js";import"./Separator-D-1V8FhN.js";import"./SelectionManager-CxfZry6F.js";import"./useEvent-TDS_oy8g.js";import"./useCollator-DPWjVVbc.js";import"./ActionBatch-RbyKfuct.js";import"./ButtonView-MbZrvuWF.js";import"./Flex-JXNPn7Yl.js";import"./useRef-DbGYr9ig.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
