import{r as g,j as r}from"./iframe-Bh3xJiHl.js";import{R as t}from"./Rating-CFXx7aKY.js";import{L as l}from"./Label-SNmrw9Fy.js";import{F as R}from"./FieldError-BT5CTe02.js";import{u as h,F as b,t as F}from"./ResetButton-DyvGYpOi.js";import{B as f}from"./Button-C1GDS2T5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BO5-ThfV.js";import"./flowComponent-C3sfiT_Y.js";import"./index-BFDJcR6G.js";import"./index-CTdhbmBU.js";import"./remote-Bp1RK0aJ.js";import"./useLocalizedStringFormatter-C9w1tvwK.js";import"./context-BR0BeWgQ.js";import"./RadioGroup-Cie-trRO.js";import"./utils-Dfx959rT.js";import"./FieldError-DSfA25Iv.js";import"./Text-CYmLgYN4.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BYhBcXhc.js";import"./useLabel-CXwac_uq.js";import"./Label-Dluta3ia.js";import"./Hidden-DdbuHEan.js";import"./SelectionIndicator-CiZnwtLL.js";import"./useFormValidation-DFhVz88J.js";import"./useFocus-BHtMPlKM.js";import"./useFocusRing-BHUB4uMx.js";import"./useControlledState-cRERDsL1.js";import"./FocusScope-DSBEK_-_.js";import"./useFormReset-CbcSutFk.js";import"./usePress-B8ZJpDXl.js";import"./useFocusable-BqTTqTxS.js";import"./VisuallyHidden-CnocgGJn.js";import"./useFieldComponent-DixKAqTB.js";import"./useMakeFocusable-DtIvTV-O.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-29lF4HJO.js";import"./AlertIcon-BebRztpd.js";import"./dynamic-Cx5ap73z.js";import"./ActionGroupView-DfrbEJ0p.js";import"./Content-DW0SliHj.js";import"./Heading-OKG0Iw9H.js";import"./Heading-DtIx3EFz.js";import"./RSPContexts-CiTjd_Cl.js";import"./Text-yap4nkEx.js";import"./browser-8DYgdl68.js";import"./EmulatedBoldText-jamwOsD6.js";import"./ActionGroup-B4cK5020.js";import"./getActionGroupSlot-1kHLqAyx.js";import"./useStatic-BN6jI5KS.js";import"./Modal-BCLm9hzN.js";import"./useOverlayController-DT1eg7nU.js";import"./Overlay-2lTiqzcd.js";import"./OverlayContextProvider-nbeISQDl.js";import"./LoadingSpinner-DCCe8ZqR.js";import"./Dialog-CdFvlhxh.js";import"./Button-BNrfYXOb.js";import"./ProgressBar-f9Z69uXY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-D44cF5Xm.js";import"./Collection-DIBLnAHN.js";import"./CollectionBuilder-CXW-gYlJ.js";import"./Separator-C-kXScb9.js";import"./SelectionManager-DY1RX6tv.js";import"./useEvent-Ck38Sl35.js";import"./useCollator-DwLdnUiO.js";import"./ActionBatch-i2QcTjWd.js";import"./ButtonView-DDvKz1ey.js";import"./Flex-BBxjU3qG.js";import"./useRef-B9SaQVKF.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
