import{r as g,j as e}from"./iframe-B9WJ5iKj.js";import{F as t}from"./FileDropZone-BGrEG-2T.js";import{S as d}from"./Section-CXkYem1U.js";import{F as u}from"./FileCardList-D3FIerMu.js";import{F}from"./FileCard-CvaLOM4P.js";import{u as k,F as U,t as w}from"./Form-CZL4xkFP.js";import{B as s}from"./Button-D_a9cGts.js";import{A as E}from"./ActionGroup-Ds5-Qvpw.js";import{$ as x,a0 as R}from"./IconWarning-iA3abBs4.js";import{H as f}from"./Heading-BA4dFWVo.js";import{F as h}from"./FileField-DYlJbZtt.js";import{T as W}from"./Text-CSPzXI-q.js";import"./IllustratedMessage-uKa67i9M.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGbAkxa2.js";import"./mergeRefs-DdPqSpPT.js";import"./index-DKUVlu-x.js";import"./utils-DB8fltME.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-COQnmlIw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-oUVSUbln.js";import"./useFocus-hMfli9CJ.js";import"./useCollator-2x6iNpQz.js";import"./context-B6-GkfV2.js";import"./useLocalizedStringFormatter-DFSg5pkm.js";import"./Button-BgiaEGOw.js";import"./ProgressBar-C1_1cHyi.js";import"./Label-D_4wO_RK.js";import"./Hidden-DsQKnrr0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cwd9gmzr.js";import"./useFocusRing-BfWSMilO.js";import"./useFocusable-uW0l0Nx0.js";import"./VisuallyHidden-BITg658c.js";import"./ContextMenuSection-DlocWNYv.js";import"./Action-BKjYIDhz.js";import"./context-WaClvBnE.js";import"./useStatic-oaWlYVrV.js";import"./browser-BOk1fb3_.js";import"./getActionGroupSlot-DpnJzbbM.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D5fJjWQP.js";import"./RSPContexts-CDVdjyBw.js";import"./OverlayArrow-CE7drKv_.js";import"./useControlledState-DqBsJvcb.js";import"./Collection-DJgASAUx.js";import"./CollectionBuilder-C14ghNrk.js";import"./Separator-dmjViTlK.js";import"./Group-Cz3tZ_vF.js";import"./SearchField-DA0x0iyL.js";import"./FieldError-DavyfSHK.js";import"./Form-FBD95hlW.js";import"./useTextField-CTUt_DB_.js";import"./useFormReset-X7y3l5xq.js";import"./TextField-DKiK_bQe.js";import"./useEvent-CBc3F-6H.js";import"./SelectionManager-CfvJ92XB.js";import"./FocusScope-aIFO3fHs.js";import"./ColumnLayout-GyTsMqNm.js";import"./Avatar-DD1Sc1a5.js";import"./AlertIcon-B-Ff_jMN.js";import"./Image-oJyBsawn.js";import"./Link-DXQkeCmn.js";import"./ButtonView-DF5RK9e1.js";import"./ContextMenuContent-F-T1KRd5.js";import"./Popover-CeU9-gLu.js";import"./DialogTriggerView-C_MYOBvn.js";import"./Switch-D64qVd34.js";import"./Label-Txm3TZUN.js";import"./useToggleState-BHBUTZdp.js";import"./FieldError-BOUOKYBY.js";import"./LoadingSpinner-BLFdik4W.js";import"./Heading-ir8hZIQC.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-C7rcw5Ry.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
