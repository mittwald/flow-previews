import{r as g,j as e}from"./iframe-DaUAgimo.js";import{F as t}from"./FileDropZone-2oSsPRER.js";import{S as d}from"./Section-CYdsUElM.js";import{F as u}from"./FileCardList-JtVnkXum.js";import{F}from"./FileCard-BYMY-070.js";import{u as k,F as U,t as w}from"./Form-v8meviLP.js";import{B as s}from"./Button-BNJyR7fn.js";import{A as E}from"./ActionGroup-DCIqMTyH.js";import{$ as x,a0 as R}from"./IconWarning-Jl_pbRrq.js";import{H as f}from"./Heading-CZC9UHM5.js";import{F as h}from"./FileField-BBFffibA.js";import{T as W}from"./Text-DqLl2XlR.js";import"./IllustratedMessage-D8q0Q9H-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-nbYVlS2U.js";import"./mergeRefs-tiTDQII5.js";import"./index-D-fn1bJu.js";import"./utils-Dv3HAiNW.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DKL0uLiC.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-4W4rDaLN.js";import"./useFocus-DfmeJaC9.js";import"./useCollator-CI-kdhZu.js";import"./context-DGmQszzG.js";import"./useLocalizedStringFormatter-Dbj9oBzk.js";import"./Button-CD_lBn7X.js";import"./ProgressBar-Cs4fjP5n.js";import"./Label-BA5dW2di.js";import"./Hidden-DmAVKgDo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BEu6_Qu_.js";import"./useFocusRing-6fCWhHXp.js";import"./useFocusable-91Y8y3Dw.js";import"./VisuallyHidden-BnUSGmEW.js";import"./ContextMenuSection-BgngavkU.js";import"./Action-6Ewb0bna.js";import"./context-C_g0dLJp.js";import"./useStatic-Djoi-J49.js";import"./browser-DFc9RAYz.js";import"./getActionGroupSlot-V1QIM2yi.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CaJ4kRlO.js";import"./RSPContexts-GpjylgJ9.js";import"./OverlayArrow-De5g7eHd.js";import"./useControlledState-HXI1EgZM.js";import"./Collection-Cbp4nuPj.js";import"./CollectionBuilder-Cu6aZgsw.js";import"./Separator-AEaXKmSc.js";import"./Group-D-iHY_KE.js";import"./SearchField-De9Vc972.js";import"./FieldError-CBWJBmz-.js";import"./Form-StxO2YAG.js";import"./useTextField-DwvDg_tT.js";import"./useFormReset-CA4kI8bZ.js";import"./TextField-Cz-3i59y.js";import"./useEvent-dvApoQWz.js";import"./SelectionManager-bQOu0uyJ.js";import"./FocusScope-Gc7sAVxN.js";import"./ColumnLayout-BHylyjLZ.js";import"./Avatar-DRqRAt1n.js";import"./AlertIcon-CQWaGZWB.js";import"./Image-CC_LKAf0.js";import"./Link--At85h3G.js";import"./ButtonView-B6NoEu3U.js";import"./ContextMenuContent-IXUEHRsx.js";import"./Popover-C3acxAMq.js";import"./DialogTriggerView-CgOUSRTq.js";import"./Switch-CG36W35Q.js";import"./Label-BgV7ip1p.js";import"./useToggleState-D_caSlle.js";import"./FieldError-BvHufvs5.js";import"./LoadingSpinner-MgjzVDHH.js";import"./Heading-CBph4xMm.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-B3KIlJpF.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,I,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var T,Z,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(_=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
