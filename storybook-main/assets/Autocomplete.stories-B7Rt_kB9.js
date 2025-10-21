import{j as r,r as j}from"./iframe-CMcq8v1f.js";import{u as d,F as u,t as g,a as h}from"./Form-DzH8G5ZK.js";import{B as i}from"./Button-CRhbM7FI.js";import{S as b}from"./Section-BVe8Ycpq.js";import{A as E}from"./ActionGroup-DppP5Nb_.js";import{s as f}from"./Action-DzVfKIry.js";import{A as m}from"./Autocomplete-BgkrMgxH.js";import{L as l}from"./Label-BIfXBQMD.js";import{T as a}from"./TextField-CWSzVflx.js";import{O as S}from"./Option-D2BQAYIo.js";import{F as T}from"./useFieldComponent-B7IsP0qp.js";import"./index-nuYtCEEu.js";import"./flowComponent-DAEI1NYm.js";import"./index-UsNUevoW.js";import"./clsx-B-dksMZM.js";import"./index-Tcjlyiep.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./context-Bckjq63R.js";import"./browser-BnbqEoZX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-pzLTBmMV.js";import"./Text-DOkc_YZA.js";import"./EmulatedBoldText-DAg28Pal.js";import"./Text-CkmSClwy.js";import"./utils-B4_KO4f3.js";import"./LoadingSpinner-DgAvzAIP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qWTNe4li.js";import"./ProgressBar-DGR0UqD3.js";import"./Label-CtMkNZ5K.js";import"./Hidden-BSe2pCrZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MLAtSIJy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bqdsvk60.js";import"./useFocus-B0Qlm3zv.js";import"./useFocusRing-CoJ5esee.js";import"./useFocusable-DlaONHPB.js";import"./ContextMenuSection-DtqQsaJ2.js";import"./Dialog-Drh022ms.js";import"./RSPContexts-DoqEYCaI.js";import"./OverlayArrow-Czusrgg9.js";import"./useControlledState-C8UmWEhe.js";import"./Collection-lzDPGY_z.js";import"./CollectionBuilder-DClya-CG.js";import"./SelectionIndicator-npitMQ6K.js";import"./Separator-B5umkblU.js";import"./SelectionManager-CYX1bfTV.js";import"./useEvent-DWTRHc2N.js";import"./useCollator-DTERHYIY.js";import"./FocusScope-BZyWBR-T.js";import"./VisuallyHidden-Dy6kQkYD.js";import"./dynamic-FUMijUiW.js";import"./getActionGroupSlot-CSYISPXH.js";import"./useStatic-CKvWQ5ch.js";import"./context-haW4s5UJ.js";import"./useOverlayController-B6qJG6eL.js";import"./ReactAriaControlledValueFix-GWCaGKNm.js";import"./useFilter-BaeRwan8.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-SxbfgzZO.js";import"./FieldDescription-CUyjOtFz.js";import"./TextField-Bw4pYMEF.js";import"./Form-BA9ATDJW.js";import"./Group-Cj4tB1lx.js";import"./Input-D43W09OA.js";import"./useTextField-2CL4Bwhs.js";import"./useFormReset-DUTu2q8R.js";import"./useFormValidation-C01Q1Aoq.js";import"./Popover-B0yZiuHu.js";import"./OverlayContextProvider-CrE8gLZT.js";import"./ClearPropsContextView-Cy6OLcLC.js";import"./ClearPropsContext-CU9ecYMv.js";import"./DragAndDrop-DqcFh9lQ.js";import"./inertValue-HhDqmaW6.js";import"./useListState-BE5Utr86.js";import"./react-children-utilities-CDk9z-7u.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(S,{value:o,textValue:o,children:o},o)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),o=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(T,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
