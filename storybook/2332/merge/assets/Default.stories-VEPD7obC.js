import{r as g,j as r}from"./iframe-COJ9RE48.js";import{R as t}from"./Rating-CrzkCm5Q.js";import{L as l}from"./Label-B42D24b-.js";import{F as R}from"./FieldError-CCI4UyFC.js";import{u as h,F as b,t as F}from"./ResetButton-ClaeOlVC.js";import{B as f}from"./Button-CMQanS4m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BMwiqmvN.js";import"./flowComponent-X1hvA0Vg.js";import"./index-Dygvt5pN.js";import"./index-D5EZb4o9.js";import"./remote-BHpqvLOn.js";import"./useLocalizedStringFormatter-Cn0B0HDz.js";import"./context-6fEx4cd5.js";import"./RadioGroup-B3maErmT.js";import"./utils-mqorQ4Bj.js";import"./FieldError-GKNsJ0Cn.js";import"./Text-De8BGzPh.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DdhXtOmH.js";import"./useLabel-CDG97Ijf.js";import"./Label-H5AVk4Tf.js";import"./Hidden-DYByFplp.js";import"./SelectionIndicator-D_pnQduh.js";import"./useFormValidation-DQ8UK_oB.js";import"./useFocus-C0sdQCtL.js";import"./useFocusRing-CTczndmn.js";import"./useControlledState-BKL31WKE.js";import"./FocusScope-BJ-yMckp.js";import"./useFormReset-BVeU8GRO.js";import"./usePress-CI06DRQW.js";import"./useFocusable-_fwbj2-b.js";import"./VisuallyHidden-DAPVNl2G.js";import"./useFieldComponent-C2vXV8Pm.js";import"./useMakeFocusable-DGR34_TP.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DQ5OQX7v.js";import"./AlertIcon-BTDbiAGg.js";import"./dynamic-CTxK5DLa.js";import"./ActionGroupView-fMLXotgU.js";import"./Content-CnaSOdl5.js";import"./Heading-DxYLpioN.js";import"./Heading-5-Pxsrno.js";import"./RSPContexts-CacVUoYW.js";import"./Text-Bzpr-GrC.js";import"./browser-DOjt7J27.js";import"./EmulatedBoldText-DzXTkxYI.js";import"./ActionGroup-De8HYD8X.js";import"./getActionGroupSlot-CmDqFskk.js";import"./useStatic-BccM3ree.js";import"./Modal-DApCOQ01.js";import"./useOverlayController-FIUUtlCA.js";import"./Overlay-DCP7Ml7p.js";import"./OverlayContextProvider-CBc03cFF.js";import"./LoadingSpinner-CBTolouR.js";import"./Dialog-Bn1iAsfr.js";import"./Button-BX1Wpmoy.js";import"./ProgressBar-DUh8L45o.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-BueQpaoQ.js";import"./Collection-Cj7qUdsZ.js";import"./CollectionBuilder-BBRIkTLo.js";import"./Separator-JpTraE0Z.js";import"./SelectionManager-2oI8n0VA.js";import"./useEvent-CTKdBRUT.js";import"./useCollator-CXxaQt2T.js";import"./ActionBatch-BL-a0sfJ.js";import"./ButtonView-BPjbrkaq.js";import"./Flex-DKLR47fR.js";import"./useRef-CyM80vuH.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
