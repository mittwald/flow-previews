import{r as g,j as r}from"./iframe-C037GO3p.js";import{R as t}from"./Rating-B9Huybya.js";import{L as l}from"./Label-B8SETf0h.js";import{F as R}from"./FieldError-B5a1fJJd.js";import{u as h,F as b,t as F}from"./FormRootError-DJURmarp.js";import{B as f}from"./Button-Cf9guGvq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-tMH4RyLr.js";import"./flowComponent-DDhfot0o.js";import"./index-wUcB077p.js";import"./index-aVIlTX7l.js";import"./remote-BG6_lggN.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./context-Cm0s8R8a.js";import"./RadioGroup-CdyMDwKo.js";import"./utils-B21QcS96.js";import"./FieldError-BWfaawdZ.js";import"./Text-BlWqR5Lx.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DK0MW_mU.js";import"./useLabel-FMiMqQcP.js";import"./Label-B5WCISDn.js";import"./Hidden-CT4yCR-L.js";import"./SelectionIndicator-DMUN5t4K.js";import"./useFormValidation-kMumfte1.js";import"./useFocus-CuP2Z3Ew.js";import"./useFocusRing-D8Rjq8L2.js";import"./useControlledState-DIGHyhBs.js";import"./FocusScope-ByEh1Q0k.js";import"./useFormReset-BmsW_IRy.js";import"./usePress-DtHLFK3z.js";import"./useFocusable-DZHoKnFR.js";import"./VisuallyHidden-DBGkoZNP.js";import"./useFieldComponent-BW6tilSl.js";import"./useMakeFocusable-DiDMwghg.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BaelcRob.js";import"./AlertIcon-CoEhaz6M.js";import"./dynamic-CXANBhHf.js";import"./ActionGroupView-CqMOXzA_.js";import"./Content-D47RimDj.js";import"./Heading-D6ofxLDB.js";import"./Heading-DNAjQtPl.js";import"./RSPContexts-Cx4BM4L8.js";import"./Text-1H8qvaGa.js";import"./browser-CtD1Hg4J.js";import"./EmulatedBoldText-BFdb5mKm.js";import"./ActionGroup-BMh_5334.js";import"./getActionGroupSlot-Be7CG0GW.js";import"./useStatic-zK9KTA7T.js";import"./Modal-DzeJT8sQ.js";import"./useOverlayController-CulrQTjS.js";import"./Overlay-DtmfWyOD.js";import"./OverlayContextProvider-saupE8AB.js";import"./LoadingSpinner-7anO2L1H.js";import"./Dialog-Sd6ebC5F.js";import"./Button-3UAE6tol.js";import"./ProgressBar-Cvwm74GX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Ct00V4z2.js";import"./Collection--dT_Uf-3.js";import"./CollectionBuilder-BaeZE-8K.js";import"./Separator-DqZ2iszF.js";import"./SelectionManager-DPHkBOMj.js";import"./useEvent-DWoTHX9Z.js";import"./useCollator-SPxqcFer.js";import"./ActionBatch-BkGPDfVM.js";import"./ButtonView-DKqFNzvb.js";import"./Flex-krSDMMbd.js";import"./useRef-CAUxoMVD.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
