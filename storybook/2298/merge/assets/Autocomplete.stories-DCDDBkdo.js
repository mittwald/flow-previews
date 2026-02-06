import{j as r,r as g}from"./iframe-P-BtG9en.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-Bun6L1Pq.js";import{B as f}from"./Button-BDKyvND0.js";import{S as E}from"./Section-58eqO89k.js";import{A as T}from"./ActionGroup-BOaMC-Ca.js";import{s as u}from"./Action-BXaB41c4.js";import{A as i}from"./Autocomplete-de5KYceU.js";import{L as p}from"./Label-P3DTYY4f.js";import{T as l}from"./TextField-Bpc_HJbq.js";import{O as B}from"./Option-DkqtgVto.js";import{F as A}from"./FieldError-BKtriW0o.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-NZeYY7PB.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./clsx-B-dksMZM.js";import"./index-BvXbw6Ik.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./context-DgQkEglP.js";import"./useRef-Vl5p17w5.js";import"./utils-B0ReHH5J.js";import"./ButtonView-CwOL1ZjU.js";import"./browser-CAs7Gyq6.js";import"./IconWarning-NSWHp5YX.js";import"./remote-CHm5B1ZS.js";import"./Text-WQ3bdi2b.js";import"./EmulatedBoldText-Dkyjs4gQ.js";import"./Text-Cuc5X3SS.js";import"./LoadingSpinner-CEdiZrnd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CkYmzEte.js";import"./ProgressBar-DT6X9kMn.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQN1qZoA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DdsYmr0S.js";import"./useFocus-CaaZ7Vn6.js";import"./useFocusRing-CySMD5sm.js";import"./useFocusable-BT9LLfcI.js";import"./ContextMenuSection-DCh3mp1Z.js";import"./Dialog-CXomJO1p.js";import"./RSPContexts-Jnosxnes.js";import"./OverlayArrow-BfX9M7HU.js";import"./useControlledState-CF2gRUje.js";import"./Collection-C65VUZYL.js";import"./CollectionBuilder-DTl13Dsz.js";import"./SelectionIndicator-DSNo1Dq6.js";import"./Separator-DqzDCiom.js";import"./SelectionManager-Bov5sZzJ.js";import"./useEvent-D5tDHFnx.js";import"./useCollator-Cdxl-D7M.js";import"./FocusScope-DOTGny1g.js";import"./VisuallyHidden-DdvDFx4J.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./useStatic-CkdzkAMF.js";import"./context-DzeViRSK.js";import"./useOverlayController-N6VWZ_a7.js";import"./useFieldComponent-DCdIumPj.js";import"./useFilter-BC2jTA_C.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-CU68XwN9.js";import"./FieldDescription-DHDLfryo.js";import"./TextField-Bc6PZo_9.js";import"./FieldError-C3DeF1uc.js";import"./Form-D5TX54v-.js";import"./Group-DbH-9q8J.js";import"./Input-tDUM_w9j.js";import"./useTextField-r4nD2off.js";import"./useFormReset-EHJI2p2K.js";import"./useFormValidation-ePPiHYYq.js";import"./Popover-mshniZ9g.js";import"./OverlayContextProvider-c997mKVu.js";import"./ListBox-CeVIwY0B.js";import"./DragAndDrop-BaOrcqaP.js";import"./inertValue-C649FRp7.js";import"./useListState-eCqMdAey.js";import"./AlertText-B793ATvK.js";import"./AlertIcon-D-lULPsb.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ee=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ee as __namedExportsOrder,re as default};
