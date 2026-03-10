import{r as d,j as r}from"./iframe-Bge_iwzq.js";import{R as e}from"./Rating-BxuPjQ__.js";import{L as m}from"./Label-DsCIDP_n.js";import{F as u}from"./FieldError-D2SilRMV.js";import{u as c,F as g,t as f}from"./ResetButton-B8dyUvel.js";import{B as R}from"./Button-DYq5oiR6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CnGwh2Y2.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./remote-CO23tKXG.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./RadioGroup-UCIo66iv.js";import"./utils-rhPAe061.js";import"./FieldError-Cv0VAgMN.js";import"./Text-70WXc8nw.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-YPyJtwoF.js";import"./useLabel-ltgoN8N_.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./SelectionIndicator-HpycCnAD.js";import"./useFormValidation-SyV8SqLU.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useControlledState-CyAGSHwZ.js";import"./FocusScope-DsvOCLtc.js";import"./useFormReset-CAOi_S_S.js";import"./usePress-BXEJU3rI.js";import"./useFocusable-BPbhPIus.js";import"./VisuallyHidden-BL5eqrat.js";import"./useFieldComponent-DrAtnMqi.js";import"./useMakeFocusable-D6KSzyjC.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";import"./dynamic-C3MU2GF_.js";import"./ActionGroupView-DMVI4rfL.js";import"./Content-CuNOzgqd.js";import"./Heading-JLPBp959.js";import"./Heading-DerjJN3d.js";import"./RSPContexts-DPd6iTOd.js";import"./Text-Bo3CKbUr.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./ActionGroup-Cm9WLYvL.js";import"./getActionGroupSlot-DLRBpctv.js";import"./useStatic-CNeEScnJ.js";import"./Modal-DEyfydXj.js";import"./useOverlayController-wivVBOVc.js";import"./Overlay-G0jPQhAE.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./LoadingSpinner-BWNPdeXh.js";import"./Dialog-BA7SIyML.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-CPd1sFKC.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./Separator-B2lQeJLB.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./ActionBatch-AWhYHCSY.js";import"./ButtonView-DwzX0guQ.js";import"./Flex-DYbjytEc.js";import"./useRef-C4wUjBhi.js";const zr={title:"Form Controls/Rating",component:e,args:{size:"m",isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{size:{control:"inline-radio",options:["s","m"]}},render:t=>r.jsx(e,{"aria-label":"Rating",defaultValue:2,...t,children:r.jsx(m,{children:"Rating"})})},o={},i={render:t=>r.jsxs(e,{...t,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(m,{children:"Rating"}),r.jsx(u,{children:"Please rate"})]})},a={render:t=>{const[s,p]=d.useState(4);return r.jsx(e,{...t,value:s,onChange:l=>p(parseInt(l)),children:r.jsx(m,{children:"Rating"})})}},n={render:()=>{const t=c({defaultValues:{rating:2}}),s=f();return r.jsxs(g,{form:t,onSubmit:async p=>console.log(p.rating),children:[r.jsx(s,{name:"rating",children:r.jsx(e,{children:r.jsx(m,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(R,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
