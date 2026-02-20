import{r as g,j as r}from"./iframe-DGnxviCN.js";import{R as t}from"./Rating-DFaBUfIy.js";import{L as l}from"./Label-C_bFUpyc.js";import{F as R}from"./FieldError-D8VjacOs.js";import{u as h,F as b,t as F}from"./ResetButton-DcAZwnDv.js";import{B as f}from"./Button-BVsKVkL8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-B9r0STX6.js";import"./flowComponent-BKDhK7wE.js";import"./index-BGEs2x-a.js";import"./index-CLLV6gyd.js";import"./remote-B6BjMgpw.js";import"./useLocalizedStringFormatter-ClYonFTS.js";import"./context-UPqYfqWR.js";import"./RadioGroup-0JeUUmjM.js";import"./utils-BkfS5ksp.js";import"./FieldError-er7nowFJ.js";import"./Text-DvHtl8Bn.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DxH8Icum.js";import"./useLabel-BPNr7xBu.js";import"./Label-5xK8AOcv.js";import"./Hidden-v-Wf_Hux.js";import"./SelectionIndicator-BVYQMpc5.js";import"./useFormValidation-Dta_Z6Hx.js";import"./useFocus--s-Wd8Ep.js";import"./useFocusRing-Bv9AUNti.js";import"./useControlledState-Tnf2yuXg.js";import"./FocusScope-CggPEhUf.js";import"./useFormReset-DURLcehp.js";import"./usePress-CyY11qHx.js";import"./useFocusable-Qpttz7ZN.js";import"./VisuallyHidden-BQzdTzN8.js";import"./useFieldComponent-YlKWY1fY.js";import"./useMakeFocusable-BsT1WoXV.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CALscOJV.js";import"./AlertIcon-DgP01cQO.js";import"./dynamic-DjV52Fwj.js";import"./ActionGroupView-CgnnpUaC.js";import"./Content-7cyJH864.js";import"./Heading-DTe6jOe1.js";import"./Heading-BzIJuxDf.js";import"./RSPContexts-DVx2WDHj.js";import"./Text-VNnveGPv.js";import"./browser-Cb_u6_6F.js";import"./EmulatedBoldText-DzMWb8wu.js";import"./ActionGroup-p4MSAjMl.js";import"./getActionGroupSlot-rP5M9435.js";import"./useStatic-BeisnKXD.js";import"./Modal-Dxf8kS_f.js";import"./useOverlayController-5kwf29Lw.js";import"./Overlay-Dz43Qvxj.js";import"./OverlayContextProvider-DWOAvC95.js";import"./LoadingSpinner-DowiBEwh.js";import"./Dialog-4LBd4V1R.js";import"./Button-BPmMTYs3.js";import"./ProgressBar-BzVgRhsE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Cl6eJh3Y.js";import"./Collection-SZbXc0LG.js";import"./CollectionBuilder-DEOfwI8d.js";import"./Separator-BN8d0XAg.js";import"./SelectionManager-C4F6MNyw.js";import"./useEvent-BwKzZdM2.js";import"./useCollator-2w2DhYsq.js";import"./ActionBatch-CX-JwDue.js";import"./ButtonView-B9Wck9x_.js";import"./Flex-COS4YHsY.js";import"./useRef-CexGozGe.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
