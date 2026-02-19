import{r as g,j as r}from"./iframe-CDsKaBRg.js";import{R as t}from"./Rating-B5spjc9m.js";import{L as l}from"./Label-D5EyKl2G.js";import{F as R}from"./FieldError-CR7kl2wA.js";import{u as h,F as b,t as F}from"./ResetButton-BwL6hTeN.js";import{B as f}from"./Button-DrVGXfuQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BO7Rp0Xm.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./index-RjKRi-BV.js";import"./remote-CceIEVln.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./context-BPMj9VV_.js";import"./RadioGroup-DPUzm_zz.js";import"./utils-D_LVRUjq.js";import"./FieldError-CoNTUoG6.js";import"./Text-Ara-YSvE.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CsNQY4H6.js";import"./useLabel-CIho-35Z.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./SelectionIndicator-Dg52EWqk.js";import"./useFormValidation-B4cT2hyf.js";import"./useFocus-DLB8Ejx4.js";import"./useFocusRing-BBPUeOqt.js";import"./useControlledState-daUq4f0n.js";import"./FocusScope-BDZMZ6lz.js";import"./useFormReset-CxPQXG_K.js";import"./usePress-Dan0bPtD.js";import"./useFocusable-C6i2fSTk.js";import"./VisuallyHidden-BzY4kZPn.js";import"./useFieldComponent-CC8SHRwT.js";import"./useMakeFocusable-CMgfR4Fo.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BdJT91v6.js";import"./AlertIcon-BRHbbzl7.js";import"./dynamic-CtOpUuGK.js";import"./ActionGroupView-CPb_RrYj.js";import"./Content-hDAUdQXl.js";import"./Heading-DaIr1sLA.js";import"./Heading-CTLIsxjY.js";import"./RSPContexts-B8A9jPpa.js";import"./Text-BC05_GH2.js";import"./browser-CeRuCCb_.js";import"./EmulatedBoldText-D5k4nusE.js";import"./ActionGroup-DpRNak7X.js";import"./getActionGroupSlot-DeDfHS7N.js";import"./useStatic-B_kqalTp.js";import"./Modal-BKmcb3Jp.js";import"./useOverlayController-B7-u35xe.js";import"./Overlay-DJH25hP-.js";import"./OverlayContextProvider-C6_d12zo.js";import"./LoadingSpinner-COR3vr_l.js";import"./Dialog-C4SGct0D.js";import"./Button-BshsCdLp.js";import"./ProgressBar-HELWPhB_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DUsbU_k4.js";import"./Collection-C8L6dRd5.js";import"./CollectionBuilder-CUH6PT6u.js";import"./Separator-DOC4rouP.js";import"./SelectionManager-DOsWkSmS.js";import"./useEvent-7orQvKiF.js";import"./useCollator-2vs6SVKa.js";import"./ActionBatch-Jyp25YdZ.js";import"./ButtonView-DkT0_tka.js";import"./Flex-C5S7EQFf.js";import"./useRef-CetA4uZk.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
