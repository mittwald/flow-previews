import{j as r,r as j}from"./iframe-BQyHcTNh.js";import{u as d,F as u,t as g,a as h}from"./Form-Dghv3XBA.js";import{B as i}from"./Button-ieCP1ArV.js";import{S as b}from"./Section-D4fUAwGu.js";import{A as E}from"./ActionGroup-WBeyu3m_.js";import{s as f}from"./Action-Bi6tM7BN.js";import{A as m}from"./Autocomplete-SWrgeTd_.js";import{L as l}from"./Label-JK740Dk1.js";import{T as a}from"./TextField-BpAee58w.js";import{O as S}from"./Option-D7nKBct8.js";import{F as T}from"./FieldError-AQx_Co0q.js";import"./index-nuYtCEEu.js";import"./dynamic-V8J33Kah.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./clsx-B-dksMZM.js";import"./index-D5h5WobT.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./context-BymCJUNL.js";import"./browser-CktdIn7a.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-D8COeLpG.js";import"./Text-_hc15B6K.js";import"./EmulatedBoldText-77q4Ify-.js";import"./Text-C9BF5CjQ.js";import"./utils-CdCPWCHO.js";import"./LoadingSpinner-CEYsHom-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C2idEpfM.js";import"./ProgressBar-BXdleHGA.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeM_oEx1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-qWGUTJsN.js";import"./useFocus-COF7nP05.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocusable-DJd2VQkc.js";import"./ContextMenuSection-ZyWidMUH.js";import"./Dialog-CTkyeFiO.js";import"./RSPContexts-BtdGc8q9.js";import"./OverlayArrow-Dp6PlRHE.js";import"./useControlledState-TEYDAVm8.js";import"./Collection-DEfh8kkF.js";import"./CollectionBuilder-D9BuGY1P.js";import"./SelectionIndicator-BnroM9vv.js";import"./Separator-BIV1anzw.js";import"./SelectionManager-DeoXhPYy.js";import"./useEvent-BWXlYds5.js";import"./useCollator-B9ukcsEW.js";import"./FocusScope-DELlCJxb.js";import"./VisuallyHidden-rd1eTAwo.js";import"./getActionGroupSlot-DtqoduiB.js";import"./useStatic-CIMbf_kn.js";import"./context-B5Yt5ZbD.js";import"./Popover-DSb6ue0f.js";import"./OverlayContextProvider-Cx4xwIBd.js";import"./ClearPropsContextView-BeRr4MLk.js";import"./ClearPropsContext-CD4xLCoc.js";import"./ReactAriaControlledValueFix-CUbxH7dl.js";import"./useFieldComponent-Cyrlnow6.js";import"./useFilter-_IWIymsq.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-gfHUB_05.js";import"./FieldDescription-mxWByT_L.js";import"./TextField-D6hfEfzE.js";import"./Form-CjlO_WmK.js";import"./Group-D0yjr4EW.js";import"./Input-POMMqA2k.js";import"./useTextField-0T4qffof.js";import"./useFormReset-DB-Y7LtK.js";import"./useFormValidation-Dr6xiKJA.js";import"./DragAndDrop-B4Mz3xog.js";import"./inertValue-CRBweRG2.js";import"./useListState-CY9fdn3l.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(S,{value:o,textValue:o,children:o},o)}),Yr={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),o=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(T,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,zr as __namedExportsOrder,Yr as default};
