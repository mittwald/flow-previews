import{r as d,j as r}from"./iframe-DBOgS3cI.js";import{R as e}from"./Rating-DRa40v-p.js";import{L as m}from"./Label-DEbA9P8V.js";import{F as u}from"./FieldError-DG3wyRNr.js";import{u as c,F as g,t as f}from"./ResetButton-BJEIRnrv.js";import{B as R}from"./Button-DeSyDtjE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Bt9IWQ3I.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./index-2oGrDlIx.js";import"./remote-CBP3xLJb.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./context-BFw_9KSH.js";import"./RadioGroup-3nktDYjn.js";import"./utils-BhJeINWq.js";import"./FieldError-C8B5aabp.js";import"./Text-TZlAM5yA.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BBY5sklR.js";import"./useLabel-ClWLYl61.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./useFormValidation-BF3CckmA.js";import"./useFocus-C3U4okCI.js";import"./useFocusRing-CgHq_nb-.js";import"./useControlledState-Pjvp5Vn-.js";import"./FocusScope-CHtKZ_QX.js";import"./useFormReset-M_TceD0b.js";import"./usePress-me2_PexI.js";import"./useFocusable-Jw6d-A2p.js";import"./VisuallyHidden-CQS9Xiyf.js";import"./useFieldComponent-pONIfnVv.js";import"./useMakeFocusable-BZKFSyXu.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C0iLtgHk.js";import"./AlertIcon-CCMDdz-U.js";import"./dynamic-Daa1kuSR.js";import"./ActionGroupView-BQ6DCC5_.js";import"./Content-DrBXQyIN.js";import"./Heading-BbxqBEBp.js";import"./Heading-BTHBDnxA.js";import"./RSPContexts-Dpo7G8Um.js";import"./Text-V6WF8rgy.js";import"./browser-aVPMedyb.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./ActionGroup-B1DNkudK.js";import"./getActionGroupSlot-BVP40Z09.js";import"./useStatic-_FEyJ1iK.js";import"./Modal-3YZrkyAE.js";import"./useOverlayController-CBPma3tn.js";import"./Overlay-BcCO2Gjo.js";import"./OverlayContextProvider-WXLLB1Pe.js";import"./LoadingSpinner-BMYl670W.js";import"./Dialog-DyC1f_Bj.js";import"./Button-Dkv5VJcx.js";import"./ProgressBar-CW3L6DbF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-B-9JWNCe.js";import"./Collection-DWSmaXut.js";import"./CollectionBuilder-CEj6NMcL.js";import"./Separator-BkiuZI1g.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./ActionBatch-C1BOMxBF.js";import"./ButtonView-8BynxnF3.js";import"./Flex-BqynvX0H.js";import"./useRef-CYQsz7t1.js";const zr={title:"Form Controls/Rating",component:e,args:{size:"m",isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{size:{control:"inline-radio",options:["s","m"]}},render:t=>r.jsx(e,{"aria-label":"Rating",defaultValue:2,...t,children:r.jsx(m,{children:"Rating"})})},o={},i={render:t=>r.jsxs(e,{...t,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(m,{children:"Rating"}),r.jsx(u,{children:"Please rate"})]})},a={render:t=>{const[s,p]=d.useState(4);return r.jsx(e,{...t,value:s,onChange:l=>p(parseInt(l)),children:r.jsx(m,{children:"Rating"})})}},n={render:()=>{const t=c({defaultValues:{rating:2}}),s=f();return r.jsxs(g,{form:t,onSubmit:async p=>console.log(p.rating),children:[r.jsx(s,{name:"rating",children:r.jsx(e,{children:r.jsx(m,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(R,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Or=["Default","WithFieldError","WithControlledValue","WithForm"];export{o as Default,a as WithControlledValue,i as WithFieldError,n as WithForm,Or as __namedExportsOrder,zr as default};
