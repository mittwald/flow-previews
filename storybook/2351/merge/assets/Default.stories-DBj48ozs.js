import{r as g,j as r}from"./iframe-Dx38AIDT.js";import{R as t}from"./Rating-DnkhaFq7.js";import{L as l}from"./Label-lvpVoRBR.js";import{F as R}from"./FieldError-DY7Z21GR.js";import{u as h,F as b,t as F}from"./ResetButton-D7LUbAoI.js";import{B as f}from"./Button-Bhwtl7lS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-tem5fYZU.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./index-C4zw0wF6.js";import"./remote-C7_Ru_dB.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./context-CRsgLXVa.js";import"./RadioGroup-bxaattIP.js";import"./utils-uxa8p5vl.js";import"./FieldError-Cjk2dDkd.js";import"./Text-CN5O_J5f.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CwkZdzbX.js";import"./useLabel--5Xg4_7C.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./useFormValidation-Dn8WL8kF.js";import"./useFocus-C3KeEXKn.js";import"./useFocusRing-XbCssGNL.js";import"./useControlledState-BekZOXin.js";import"./FocusScope-eq4FNALu.js";import"./useFormReset-DiledHxM.js";import"./usePress-BU6JmZbW.js";import"./useFocusable-CIjhaoEP.js";import"./VisuallyHidden-ma9EryWn.js";import"./useFieldComponent-CxTx8kf3.js";import"./useMakeFocusable-XCzcSU6p.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BEiS7w5p.js";import"./AlertIcon-BbY5ij-p.js";import"./dynamic-Cw331Sxy.js";import"./ActionGroupView-RMB2K6y-.js";import"./Content-DSBqSoeM.js";import"./Heading-z0nw7kl0.js";import"./Heading-BiABk9m9.js";import"./RSPContexts-DnJfGcBy.js";import"./Text-stRMORLN.js";import"./browser-Bgj4nWuI.js";import"./EmulatedBoldText-DkfYMVU4.js";import"./ActionGroup-CluBBM4L.js";import"./getActionGroupSlot-CnwwqW5a.js";import"./useStatic-CD9yQ0OW.js";import"./Modal-0SZ3rvM2.js";import"./useOverlayController-Cqh70DsD.js";import"./Overlay-Dc_wkWXh.js";import"./OverlayContextProvider-tTA2mi55.js";import"./LoadingSpinner-CAXp-11u.js";import"./Dialog-BIvPa65M.js";import"./Button-DXXdMML6.js";import"./ProgressBar-BzTC4ZoK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DXkjfcol.js";import"./Collection-DFwYI0R_.js";import"./CollectionBuilder-d7mW72oL.js";import"./Separator-BVmogCl8.js";import"./SelectionManager-BSVgVRml.js";import"./useEvent-D7Cb0aSH.js";import"./useCollator-DTKHLM3i.js";import"./ActionBatch-B-iA-QhY.js";import"./ButtonView-CU_3hWkX.js";import"./Flex-CUcKFbzJ.js";import"./useRef-BQ2mDf6F.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
