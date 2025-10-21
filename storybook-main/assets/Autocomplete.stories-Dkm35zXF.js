import{j as r,r as j}from"./iframe-BJcrhiyS.js";import{u as d,F as u,t as g,a as h}from"./Form-CJrts3Ir.js";import{B as i}from"./Button-DDexK_tB.js";import{S as b}from"./Section-DHFbYsCk.js";import{A as E}from"./ActionGroup-B0txZhJy.js";import{s as f}from"./Action-Cl9B75AE.js";import{A as m}from"./Autocomplete-CruLwyKL.js";import{L as l}from"./Label-DlBkeFJ8.js";import{T as a}from"./TextField-Oraq4Vjh.js";import{O as S}from"./Option-2VRG_T_I.js";import{F as T}from"./useFieldComponent-BTSjCSDH.js";import"./index-nuYtCEEu.js";import"./flowComponent-CUnmKrjI.js";import"./index-BWslXHRv.js";import"./clsx-B-dksMZM.js";import"./index-Clh-7_IP.js";import"./useLocalizedStringFormatter-BYGjl_Ur.js";import"./context-C9wRNNkX.js";import"./browser-CleZYiuo.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-DHKN92dZ.js";import"./Text-CzGb6jtw.js";import"./EmulatedBoldText-BXLeVkdu.js";import"./Text-BpL6_bME.js";import"./utils-MMz0RNDK.js";import"./LoadingSpinner-DIhYtINq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DLFIfSVU.js";import"./ProgressBar-BnMTPpQD.js";import"./Label-BomZPPry.js";import"./Hidden-BPKHXv4N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-_fpNspWn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D-MZIwgU.js";import"./useFocus-B02RLksg.js";import"./useFocusRing-Cs9uIsYW.js";import"./useFocusable-o2EAaEwJ.js";import"./ContextMenuSection-B4NyQI2O.js";import"./Dialog-BQ_EXD94.js";import"./RSPContexts-C2e5xu0T.js";import"./OverlayArrow-DSSzOs3h.js";import"./useControlledState-CmFRf9bT.js";import"./Collection-_lGiyPCh.js";import"./CollectionBuilder-B7Z337h2.js";import"./SelectionIndicator-lJ8kUAUa.js";import"./Separator-B85zM0Ob.js";import"./SelectionManager-CQyc1rjw.js";import"./useEvent-hhr9af5x.js";import"./useCollator-DUTRWdjd.js";import"./FocusScope-DZerhXt6.js";import"./VisuallyHidden-DT9WK7BB.js";import"./dynamic-D98kNBqL.js";import"./getActionGroupSlot-i3rgbr5j.js";import"./useStatic-DD6IIAig.js";import"./context-OYcKy-iK.js";import"./useOverlayController-Dw6LvLP7.js";import"./ReactAriaControlledValueFix-DNuVWwQA.js";import"./useFilter-CWMjQdeb.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-DV0gXnlu.js";import"./FieldDescription-BPGABGxO.js";import"./TextField-XJ38yjmm.js";import"./Form--RrJpAdD.js";import"./Group-q2LAtsMk.js";import"./Input-BVWAA476.js";import"./useTextField-CFlBnLNm.js";import"./useFormReset-B4UK9p8r.js";import"./useFormValidation-ofRqxeQo.js";import"./Popover-BdgkNI5W.js";import"./OverlayContextProvider-DM6mTtug.js";import"./ClearPropsContextView-Bpe56eb-.js";import"./ClearPropsContext-Bddw_Fzg.js";import"./DragAndDrop-BZzP4GNz.js";import"./inertValue-BcrISLJ_.js";import"./useListState-CQCmO4SK.js";import"./react-children-utilities-DZ5iFmYj.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(S,{value:o,textValue:o,children:o},o)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),o=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(T,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,Jr as __namedExportsOrder,zr as default};
