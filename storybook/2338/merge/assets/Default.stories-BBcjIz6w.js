import{r as d,j as r}from"./iframe-CEWg6_IX.js";import{R as e}from"./Rating-C_NDme1J.js";import{L as m}from"./Label-BaJSnICs.js";import{F as u}from"./FieldError-fCgHoEMk.js";import{u as c,F as g,t as f}from"./ResetButton-C4Ep7Det.js";import{B as R}from"./Button-CA6AkUR_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-D3143lfN.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./remote-BClk6GLL.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./RadioGroup-lftL3P9x.js";import"./utils-VWmQzJjV.js";import"./FieldError-B_BExaNJ.js";import"./Text-B3jOd0w4.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-XtAuYD0I.js";import"./useLabel-B6JubenB.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./SelectionIndicator-C5jgIoGq.js";import"./useFormValidation-przZuKLk.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useControlledState-DV7blYjC.js";import"./FocusScope-BNRdhUBQ.js";import"./useFormReset-D1AT4nVs.js";import"./usePress-BNr3g4sC.js";import"./useFocusable-B3euEuZy.js";import"./VisuallyHidden-DHhRta61.js";import"./useFieldComponent-BOMK2S5G.js";import"./useMakeFocusable-BxZgzpIb.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";import"./dynamic-JOnDgprM.js";import"./ActionGroupView-oC77FUWd.js";import"./Content-CRiMoq0F.js";import"./Heading-BWEcB93I.js";import"./Heading-Nh2qIPHf.js";import"./RSPContexts-ulpMISZ-.js";import"./Text-Bw_cIJde.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./ActionGroup-2A27ggL_.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./useStatic-B6Ppl0UQ.js";import"./Modal-BUEX4x6z.js";import"./useOverlayController-BjtWEYCu.js";import"./Overlay-3y_zvGr_.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./Dialog-0Ix26WHm.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-LwODxVqr.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./Separator-DyFTk6rC.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./ActionBatch-CnX-7Tzc.js";import"./ButtonView-BDWHTqnS.js";import"./Flex-CzqKXhE0.js";import"./useRef-D0S1EFiC.js";const zr={title:"Form Controls/Rating",component:e,args:{size:"m",isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{size:{control:"inline-radio",options:["s","m"]}},render:t=>r.jsx(e,{"aria-label":"Rating",defaultValue:2,...t,children:r.jsx(m,{children:"Rating"})})},o={},i={render:t=>r.jsxs(e,{...t,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(m,{children:"Rating"}),r.jsx(u,{children:"Please rate"})]})},a={render:t=>{const[s,p]=d.useState(4);return r.jsx(e,{...t,value:s,onChange:l=>p(parseInt(l)),children:r.jsx(m,{children:"Rating"})})}},n={render:()=>{const t=c({defaultValues:{rating:2}}),s=f();return r.jsxs(g,{form:t,onSubmit:async p=>console.log(p.rating),children:[r.jsx(s,{name:"rating",children:r.jsx(e,{children:r.jsx(m,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(R,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
