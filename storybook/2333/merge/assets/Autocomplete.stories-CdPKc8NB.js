import{r as g,j as r}from"./iframe-CaMmm6JB.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-DZiVofRK.js";import{B as f}from"./Button-Ccdb4ZyB.js";import{S as E}from"./Section-z5Dz65CL.js";import{A as T}from"./ActionGroup-C2ezmeu7.js";import{s as u}from"./ActionBatch-Q41d4eeq.js";import{A as i}from"./Autocomplete-DMi3K_ij.js";import{L as p}from"./Label-7z5ZqOim.js";import{T as l}from"./TextField-C4uNS9nA.js";import{O as B}from"./Option-D-L-oG1Q.js";import{F as A}from"./FieldError-gBRSHyIP.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CCT0rfWD.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./clsx-B-dksMZM.js";import"./index-bUizOk6y.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./context-COlkIlq2.js";import"./ActionGroupView-SXd6Ahs2.js";import"./Content-D39bfGls.js";import"./Heading-6UA8ouUH.js";import"./Heading-DZNcobqI.js";import"./RSPContexts-HzcDbyvj.js";import"./utils-BWel_6vJ.js";import"./Text-BytpHB1v.js";import"./browser-DBmSqQ-l.js";import"./EmulatedBoldText-Bldq9nM5.js";import"./Text-DltKapPO.js";import"./Modal-D-BKA9RG.js";import"./useOverlayController-DaRRxB6Y.js";import"./useStatic-CQKXHPrs.js";import"./Overlay-DFrCfT03.js";import"./OverlayContextProvider-_LkIzv60.js";import"./LoadingSpinner-D3IBMWR2.js";import"./IconWarning-CjIU5uAw.js";import"./remote-B2IWJRNM.js";import"./Dialog-YsZQ1_o0.js";import"./Button-Br8oe_nB.js";import"./ProgressBar-CBFdsoCo.js";import"./Label-GJfJgND5.js";import"./Hidden-_lt-y3bc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BlkmcG0L.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bq52eadg.js";import"./useFocus-CsmVawkN.js";import"./useFocusRing-D0nVGfyc.js";import"./useFocusable-D5loONxI.js";import"./OverlayArrow-BudvLkgn.js";import"./useControlledState-DS3iWteE.js";import"./Collection-YKpSfmi_.js";import"./CollectionBuilder-2gYZy5f8.js";import"./SelectionIndicator-C8xVf-92.js";import"./Separator-Du64Ymo6.js";import"./SelectionManager-DL58XFN7.js";import"./useEvent-DMru7c0E.js";import"./useCollator-CLVgUaDj.js";import"./FocusScope-BSI7m-fZ.js";import"./VisuallyHidden-CJ5e0jZZ.js";import"./ButtonView-VN2wxJGS.js";import"./Flex-BB0MY87d.js";import"./useRef-6651uh8r.js";import"./ContextMenuSection-CGa5WiYd.js";import"./getActionGroupSlot-xPMU2Lcl.js";import"./useFieldComponent-l9GEjfOW.js";import"./useFilter-COvjeUZq.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-CqHjqxx6.js";import"./FieldDescription-ZK4hQ0pT.js";import"./TextField-CfcKWnss.js";import"./FieldError-rN2a2i1l.js";import"./Form-DUaYRZYC.js";import"./Group-CbQ0bY4b.js";import"./Input-BR-ykejl.js";import"./useTextField-Cus2TleU.js";import"./useFormReset-B22K348z.js";import"./useFormValidation-BBrrlMUS.js";import"./Popover-DzUJnTX8.js";import"./ListBox-D2d_iSlJ.js";import"./DragAndDrop-B0Oe-5V2.js";import"./inertValue-DNobdZ_u.js";import"./useListState-CAjs9pgk.js";import"./AlertText-CvHTwf-C.js";import"./AlertIcon-CCMwGOFg.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const ne=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ne as __namedExportsOrder,se as default};
