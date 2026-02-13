import{r as g,j as r}from"./iframe-Bq_dTdDz.js";import{R as t}from"./Rating-fhTyGGCI.js";import{L as l}from"./Label-DlbZYBs5.js";import{F as R}from"./FieldError-ClLnELEE.js";import{u as h,F as b,t as F}from"./ResetButton-BqUs2IaX.js";import{B as f}from"./Button-DwhPeKe2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-AvRveFf8.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./index-C2qM6Ecb.js";import"./remote-BGgAcFUF.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./context-DasT5rkr.js";import"./RadioGroup-87QnrdZD.js";import"./utils-Dc83Zc3S.js";import"./FieldError-CB3_Y2qo.js";import"./Text-RESw6iu2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bm3_NoD-.js";import"./useLabel-BL_xrhrx.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./SelectionIndicator-B0He5XEj.js";import"./useFormValidation-ofgJ0bTW.js";import"./useFocus-zY2zj5L9.js";import"./useFocusRing-C2_YEmjA.js";import"./useControlledState-DvV_L9jP.js";import"./FocusScope-jjJ71B2a.js";import"./useFormReset-BNYkLVEo.js";import"./usePress-CxmEVb--.js";import"./useFocusable-B7WP4__g.js";import"./VisuallyHidden-6gUpRQYP.js";import"./useFieldComponent-C92nVZms.js";import"./useMakeFocusable-BdLOadfH.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";import"./dynamic-BU-d9n8a.js";import"./Overlay-BhiillRq.js";import"./useOverlayController-BN71uM-Z.js";import"./useStatic-OW4DiFQ5.js";import"./OverlayContextProvider-CwxNfmUY.js";import"./LoadingSpinner-QnwB8HJT.js";import"./Dialog-atW1yRI0.js";import"./Button-B82FCYrG.js";import"./ProgressBar-BeilQHeM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BEGF6Rgy.js";import"./OverlayArrow-D8uV1uDe.js";import"./Collection-CfTInUqx.js";import"./CollectionBuilder-DXHEkZnM.js";import"./Separator-oRLs3WBO.js";import"./SelectionManager-DJLtj_Nc.js";import"./useEvent-Bo6NaH-t.js";import"./useCollator-CL9Njxka.js";import"./ActionGroupView-9NY9P0eT.js";import"./Content-CIrJX21x.js";import"./Heading-C8DRlUq-.js";import"./Heading-Cv2K6T9Y.js";import"./Text-3w39UNLL.js";import"./browser-D_Oin-6N.js";import"./EmulatedBoldText-D57I_Edz.js";import"./ActionGroup-CKWSskWv.js";import"./getActionGroupSlot-C-FhbO6Z.js";import"./Modal-B1kIozjh.js";import"./ActionBatch-DTgx0kqH.js";import"./ButtonView-Vc-lBIdn.js";import"./Flex-DWL773Qy.js";import"./useRef-C3TY9z6n.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
