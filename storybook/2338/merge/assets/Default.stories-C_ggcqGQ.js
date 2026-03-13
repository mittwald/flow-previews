import{r as d,j as r}from"./iframe-BFddea_x.js";import{R as e}from"./Rating-snWfj-qy.js";import{L as m}from"./Label-Cyz25dCh.js";import{F as u}from"./FieldError-BfmusLP_.js";import{u as c,F as g,t as f}from"./FormRootError-DAozFL3q.js";import{B as R}from"./Button-DmFob37h.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Cwahpn-Q.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./remote-DmjGOFpp.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./RadioGroup-CiDEEYNL.js";import"./utils-D-aZUMcZ.js";import"./FieldError-Dj7b6ixT.js";import"./Text-DndMRLn5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Cmx7zRsN.js";import"./useLabel-C__elmJN.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./useFormValidation-CYvJLeFF.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useControlledState-lfI_swTV.js";import"./FocusScope-QY6lrLAj.js";import"./useFormReset-C1U9nA2s.js";import"./usePress-DZQSLH7U.js";import"./useFocusable-D-17EkqH.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./useFieldComponent-DrOhnKye.js";import"./useMakeFocusable-8SIFOJjD.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";import"./dynamic-C85Jl_PG.js";import"./ActionGroupView-BXRFxTws.js";import"./Content-CWzMlKrq.js";import"./Heading-C7vi7fKP.js";import"./Heading-CkECWlTX.js";import"./RSPContexts-DrvlE6Qo.js";import"./Text-B70YymId.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./ActionGroup-B4CMqS7f.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./useStatic-4M_8h910.js";import"./Modal-Bu11h-S7.js";import"./useOverlayController-D1CCctag.js";import"./Overlay-Dpbqdx3Y.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./LoadingSpinner-BTSUDAP0.js";import"./Dialog-Dko8Qxf5.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-CVHTB2zR.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./Separator-7xqgbQ15.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./ActionBatch-BLAWmMpV.js";import"./ButtonView-O_aZgiJ1.js";import"./Flex-BeyItrRu.js";import"./useRef-Cur5NpMF.js";const Or={title:"Form Controls/Rating",component:e,args:{size:"m",isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{size:{control:"inline-radio",options:["s","m"]}},render:t=>r.jsx(e,{"aria-label":"Rating",defaultValue:2,...t,children:r.jsx(m,{children:"Rating"})})},o={},i={render:t=>r.jsxs(e,{...t,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(m,{children:"Rating"}),r.jsx(u,{children:"Please rate"})]})},a={render:t=>{const[s,p]=d.useState(4);return r.jsx(e,{...t,value:s,onChange:l=>p(parseInt(l)),children:r.jsx(m,{children:"Rating"})})}},n={render:()=>{const t=c({defaultValues:{rating:2}}),s=f();return r.jsxs(g,{form:t,onSubmit:async p=>console.log(p.rating),children:[r.jsx(s,{name:"rating",children:r.jsx(e,{children:r.jsx(m,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(R,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithControlledValue","WithForm"];export{o as Default,a as WithControlledValue,i as WithFieldError,n as WithForm,Pr as __namedExportsOrder,Or as default};
