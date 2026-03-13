import{r as E,j as r}from"./iframe-CtEjVB66.js";import{u as c,F as d,a as h,R as F,S as x,t as y}from"./FormRootError-2xDo0dX3.js";import{B as f}from"./Button-BbnjmOHy.js";import{S as j}from"./Section-B3QlijVL.js";import{A as S}from"./ActionGroup-DvmIDtHK.js";import{s as u}from"./ActionBatch-CDzJz977.js";import{A as i}from"./Autocomplete-B8PUFVDW.js";import{L as a}from"./Label-CvAjEv-1.js";import{T as l}from"./TextField-CTAsvyVX.js";import{O as T}from"./Option-CkuHabhI.js";import{F as A}from"./FieldError-BzQCv4a3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BbkFIR2Q.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./clsx-B-dksMZM.js";import"./index-it1EKrY8.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./ActionGroupView-zAOXf7RN.js";import"./Content-BV9uIs25.js";import"./Heading-c1W7e3IT.js";import"./Heading-DMz3CQ7g.js";import"./RSPContexts-oGVR4C8S.js";import"./utils-BuEQZICT.js";import"./Text-QCKh6xRo.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./Modal-BLKh-L3K.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./Overlay-BGmB2cy_.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./LoadingSpinner-CJX4ksrz.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./Dialog-vhqDwDKM.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cre2k4PJ.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./OverlayArrow-CZCYW2ow.js";import"./useControlledState-D0kLTbtR.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./VisuallyHidden-B96eA0GA.js";import"./ButtonView-Ci2JAKGf.js";import"./Flex-CBSP5RJa.js";import"./useRef-C8PAeYAN.js";import"./ContextMenuSection-COxyh1Te.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./useFieldComponent-B7HNchXP.js";import"./useFilter-CK_wnS0C.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-UR5SmFsp.js";import"./FieldDescription-DOW1EL7Z.js";import"./TextField-uAKnHDmd.js";import"./FieldError-DJZxrTcD.js";import"./Form-Bs4UrYBw.js";import"./Group-BKGRpIrc.js";import"./Input-ByYkDHMz.js";import"./useTextField-7MsF6vto.js";import"./useFormReset-2RZyXaKm.js";import"./useFormValidation-ClIfwgLl.js";import"./Popover-fmzRw_jU.js";import"./ListBox-B-Dgr3Rf.js";import"./DragAndDrop-C947-AWn.js";import"./inertValue-Bd6lDfzL.js";import"./useListState-D8l5LmqZ.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,w=B("submit"),p=(e="")=>["example.com","test.org","email.net","mail.com"].map(o=>{const t=`${e.split("@")[0]}@${o}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),no={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const e=async g=>{await u(1500),w(g)},o=c({defaultValues:{email:"asd@example.com"}}),t=y(),b=o.watch("email");return r.jsx(d,{form:o,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(b)]})}),r.jsxs(S,{children:[r.jsx(F,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},s={},n={render:e=>{const o=c();E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=o.watch("field");return r.jsx(d,{form:o,onSubmit:async()=>await u(2e3),children:r.jsxs(j,{children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...e,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsxs(i,{...e,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(a,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),p(t)]})]})})}},m={render:e=>{const o=c(),t=o.watch("field");return r.jsxs(d,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...e,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(S,{children:[r.jsx(f,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(f,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(F,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Section>
          <Field name="field">
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
        </Section>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
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
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const mo=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,mo as __namedExportsOrder,no as default};
