import{r as g,j as r}from"./iframe-uf-MKLgq.js";import{R as t}from"./Rating-BOMYtU5Q.js";import{L as l}from"./Label-CnhLMz3J.js";import{F as R}from"./FieldError-DuL8_ys6.js";import{u as h,F as b,t as F}from"./ResetButton-Cec_c7cn.js";import{B as f}from"./Button-mfbo0dyR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BGOvrRAj.js";import"./flowComponent-CR1nBuBt.js";import"./index-B7owIbBs.js";import"./index-CTOYeHPx.js";import"./remote-7esdTMhw.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./context-DqOu6PGu.js";import"./RadioGroup-BxPaHw_6.js";import"./utils-DZ6AixXo.js";import"./FieldError-hMdCLiLA.js";import"./Text-DCWOF5Yr.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Clq2RMYH.js";import"./useLabel-CdaYwKww.js";import"./Label-Cdykpluf.js";import"./Hidden-lq-QDLcj.js";import"./SelectionIndicator-DxP3RRah.js";import"./useFormValidation-DWm9SC-U.js";import"./useFocus-BMvnG0Qw.js";import"./useFocusRing-190z59Bo.js";import"./useControlledState-BuF4aZkb.js";import"./FocusScope-1QvypY2n.js";import"./useFormReset-D43--mAD.js";import"./usePress-BdqiHW2G.js";import"./useFocusable-C3B5EmJ3.js";import"./VisuallyHidden-CibrapRB.js";import"./useFieldComponent-oiltg6td.js";import"./useMakeFocusable-C7I8z0mP.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CTyPJTrr.js";import"./AlertIcon-C9HYB2oh.js";import"./dynamic-fPlHFb8V.js";import"./ActionGroupView-D-VX7mUq.js";import"./Content-BG_xlhhi.js";import"./Heading-8mXYZ3pK.js";import"./Heading-C369PV89.js";import"./RSPContexts-nECt4NUH.js";import"./Text-CwTgn3ty.js";import"./browser-CS6yJLU7.js";import"./EmulatedBoldText-BnnwN73K.js";import"./ActionGroup-Calx21Na.js";import"./getActionGroupSlot-BEjmNJ3B.js";import"./useStatic-CS2X9Zkf.js";import"./Modal-sJUQoHJz.js";import"./useOverlayController-CR9kocR-.js";import"./Overlay-B_vOLFC2.js";import"./OverlayContextProvider-D-yAmZxE.js";import"./LoadingSpinner-CRqWvqjj.js";import"./Dialog-CWJBmICf.js";import"./Button-Dm2G6Gzh.js";import"./ProgressBar-eIkI-azg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Cm4mIARd.js";import"./Collection-xojhNDd8.js";import"./CollectionBuilder-lmcmrTAc.js";import"./Separator-5pPigfCw.js";import"./SelectionManager-D4CiQoAv.js";import"./useEvent-B9v_LmSJ.js";import"./useCollator-BHzC2k5n.js";import"./ActionBatch-zb8alXiJ.js";import"./ButtonView-D8n4Xnyv.js";import"./Flex-C_HgP_tu.js";import"./useRef-3qUKYuqY.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
