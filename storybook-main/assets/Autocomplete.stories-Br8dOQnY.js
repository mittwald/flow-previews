import{r as g,j as r}from"./iframe-DAdEF_a9.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./FormRootError-DFCTJN0D.js";import{B as f}from"./Button-BL7hv3yg.js";import{S as E}from"./Section-CLn2WL9U.js";import{A as T}from"./ActionGroup-BlNNsUJ6.js";import{s as u}from"./ActionBatch-BtBHZwy0.js";import{A as i}from"./Autocomplete-BiNMGC_c.js";import{L as p}from"./Label-D1h8c298.js";import{T as l}from"./TextField-B4sVqPyR.js";import{O as B}from"./Option-CRMv4GHe.js";import{F as A}from"./FieldError-DAuD7Eqr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-pIUCZeo6.js";import"./flowComponent-CSaST_uw.js";import"./index-UhVc0W_W.js";import"./clsx-B-dksMZM.js";import"./index-DqNUQeP9.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./context-DrtV74MG.js";import"./ActionGroupView-oVftnOVm.js";import"./Content-CJNhBNrl.js";import"./Heading-CRr1Ukpo.js";import"./Heading-B0L1HgOG.js";import"./RSPContexts-BAZVNF9B.js";import"./utils-B1o5BDIk.js";import"./Text-BlXexclX.js";import"./browser-DTw6e149.js";import"./EmulatedBoldText-DRN0x44S.js";import"./Text-ConA-l-E.js";import"./Modal-Bw_NLwNU.js";import"./useOverlayController-BdzCJ-ub.js";import"./useStatic-CKtHP4uD.js";import"./Overlay-BvmU2R8J.js";import"./OverlayContextProvider-DG82vmF2.js";import"./LoadingSpinner-BzYwrllt.js";import"./IconWarning-B_QPuDoh.js";import"./remote-BQ_isGLI.js";import"./Dialog-CWk-zVbe.js";import"./Button-DZLmAbDI.js";import"./ProgressBar-Cv5-QMXF.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CcpSY4Um.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-AnOXMqB9.js";import"./useFocus-BHQGBA4R.js";import"./useFocusRing-5n4vvaIx.js";import"./useFocusable-vdr5CzJ0.js";import"./OverlayArrow-DM34mO9f.js";import"./useControlledState-D1JeUT3E.js";import"./Collection-kYozbpbp.js";import"./CollectionBuilder-T5ZwCV3b.js";import"./SelectionIndicator-BbyFO4Ic.js";import"./Separator-DdtELOBz.js";import"./SelectionManager-CNmnVwle.js";import"./useEvent-DyHBlkna.js";import"./useCollator-BUCuy1eS.js";import"./FocusScope-Cya-_QqL.js";import"./VisuallyHidden-DtDztoAI.js";import"./ButtonView-B0xnqfb2.js";import"./Flex-BMWRjUwl.js";import"./useRef-DEVjfIov.js";import"./ContextMenuSection-C3uZY6Us.js";import"./getActionGroupSlot-2bD_hcYD.js";import"./useFieldComponent-CLfspKSt.js";import"./useFilter-BwRxUMgF.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-J23MCm-A.js";import"./FieldDescription-CFQCjYVN.js";import"./TextField-4ha8Auah.js";import"./FieldError-Be27Lv36.js";import"./Form-B4U7K7S8.js";import"./Group-D1kJtVaR.js";import"./Input-Cd2NpESg.js";import"./useTextField-BhMqFMtB.js";import"./useFormReset-BoqlzNfE.js";import"./useFormValidation-CWgfw6QX.js";import"./Popover-CBYvjYoJ.js";import"./ListBox-CPIBkLs_.js";import"./DragAndDrop-BLv9gvDR.js";import"./inertValue-GGfDevjJ.js";import"./useListState-BTS-c59c.js";import"./AlertText-kiIxGYqF.js";import"./AlertIcon-DxXhtuAo.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
