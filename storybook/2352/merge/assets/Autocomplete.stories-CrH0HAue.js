import{r as g,j as r}from"./iframe-DhXHhh1w.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-CWjyF2h3.js";import{B as f}from"./Button-DK8hND6e.js";import{S as E}from"./Section-BFL21Kdp.js";import{A as T}from"./ActionGroup-DZhEliTp.js";import{s as u}from"./ActionBatch-CBOUg1fp.js";import{A as i}from"./Autocomplete-DWlntHx9.js";import{L as p}from"./Label-B97zndYQ.js";import{T as l}from"./TextField-DcmJ_zd4.js";import{O as B}from"./Option-CbVj8_vg.js";import{F as A}from"./FieldError-NwdeaE8Z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DY1DU2Hc.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./clsx-B-dksMZM.js";import"./index-B6ijkuYI.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./context-C0JBe_V4.js";import"./ActionGroupView-CC4wWS41.js";import"./Content-BG0ad5lU.js";import"./Heading-W2uFhXaO.js";import"./Heading-CrXwA3a4.js";import"./RSPContexts-BISy0hbD.js";import"./utils--GApMcJ9.js";import"./Text-VjJbV_1P.js";import"./browser-DC-Dnn5c.js";import"./EmulatedBoldText-DK8yRX5h.js";import"./Text-BhHd18lu.js";import"./Modal-DAWN7CdU.js";import"./useOverlayController-BReF9zcC.js";import"./useStatic-Cuuv0LOE.js";import"./Overlay-CIG5Bv_4.js";import"./OverlayContextProvider-CWHHdI4p.js";import"./LoadingSpinner-BQo0GQZs.js";import"./IconWarning-Cq0bATFd.js";import"./remote-3lBAaKOS.js";import"./Dialog-CefhgDMJ.js";import"./Button-B72XzUR4.js";import"./ProgressBar-F8Z66Kjl.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B7imI5Js.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DuFsm5YE.js";import"./useFocus-CCcmXvuL.js";import"./useFocusRing-C0Ptw1X0.js";import"./useFocusable-DaonITQz.js";import"./OverlayArrow-D0YkTT7M.js";import"./useControlledState-BAaAMcGs.js";import"./Collection-CjYz6Uc3.js";import"./CollectionBuilder-BLnwNesF.js";import"./SelectionIndicator-p-DrZhoI.js";import"./Separator-YN4gslNC.js";import"./SelectionManager-DsW2owD3.js";import"./useEvent-Ceq3h06g.js";import"./useCollator-CdSsm3Cn.js";import"./FocusScope-DTOX4bjf.js";import"./VisuallyHidden-B52Q2-iE.js";import"./ButtonView-CA8U0oul.js";import"./Flex-DlE5ZV-j.js";import"./useRef-uAnVuJo1.js";import"./ContextMenuSection-EAnCbrTf.js";import"./getActionGroupSlot-BjPF_vWV.js";import"./useFieldComponent-CXGCADuw.js";import"./useFilter-DkWskwl0.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-Bz_KAzkR.js";import"./FieldDescription-Cpq8h0bA.js";import"./TextField-DASBnPfa.js";import"./FieldError-DoyTFare.js";import"./Form-Cr93Lgju.js";import"./Group-Bojaf2qr.js";import"./Input-CeMR8XUm.js";import"./useTextField-DHL_UDQT.js";import"./useFormReset-BhTKQiKR.js";import"./useFormValidation-Bi2teCon.js";import"./Popover-JroSLm89.js";import"./ListBox-d3nG2VCF.js";import"./DragAndDrop-B2RMQHyJ.js";import"./inertValue-TQVdc574.js";import"./useListState-CHf2faxN.js";import"./AlertText-CTc_944s.js";import"./AlertIcon-CowGyQyl.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
