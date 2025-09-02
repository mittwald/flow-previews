import{j as r}from"./iframe-DzdsrO80.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-B3m6OsdH.js";import{L as m}from"./Link-CZ0ewgj0.js";import{H as s}from"./HeaderNavigation-CIS15P5Q.js";import{B as o}from"./Button-DVR7cX3i.js";import{T as p}from"./Text-DXUL7YAG.js";import{I as C}from"./Image-Drbw2Hn1.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-ByhkFOfH.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CjQiyveI.js";import"./ContextMenuSection-AWtfZJeN.js";import{a as D,M as E}from"./Modal-YzaLRj8Z.js";import{H as G}from"./Heading-8JrpHVPd.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-IX1SCoto.js";import"./mergeRefs-BURbbDf-.js";import"./index-Bdpzlu2x.js";import"./useLocalizedStringFormatter-B09vxeO2.js";import"./context-DCkzppns.js";import"./utils-CvAakX2W.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DskVbL7b.js";import"./useFocus-B0VC8u8k.js";import"./useFocusRing-CBIzKb6Q.js";import"./useFocusable-COvMPAb3.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-PW_7_s64.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BCqDIvjf.js";import"./ProgressBar-LQ-fnBcd.js";import"./Label-DXfcpAFN.js";import"./Hidden-BVbf7n1G.js";import"./useLabel-BtHrL8qq.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CWHi4dia.js";import"./EmulatedBoldText-BUyeaD_Y.js";import"./Text-CRTGmFuV.js";import"./AlertIcon-DyDbQGNm.js";import"./Action-Ba6ZxKlY.js";import"./context-DKufrzCY.js";import"./useStatic-CzVMgagU.js";import"./getActionGroupSlot-COrah7QA.js";import"./Popover-CZjnIXLF.js";import"./DialogTriggerView-BSpQgGle.js";import"./Dialog-d3aXPnlF.js";import"./RSPContexts-DgNZ7nRI.js";import"./OverlayArrow-4JOsbCJv.js";import"./useControlledState-D4aZ1p71.js";import"./Collection-C9A_LHc0.js";import"./CollectionBuilder-CaWr36HU.js";import"./Separator-CBpgeXgJ.js";import"./Group-Cdr53w7M.js";import"./SearchField-C817Qgil.js";import"./FieldError-CeKpopQl.js";import"./Form-C696dGLt.js";import"./useTextField-BarUssyk.js";import"./useFormReset-B7pkU5Xm.js";import"./TextField-Cwc92i9-.js";import"./useEvent-DVhg_FlY.js";import"./SelectionManager-CLk07rVx.js";import"./useCollator-B4_CrHfJ.js";import"./FocusScope-DDPGgWDg.js";import"./VisuallyHidden-BfQH1Q-z.js";import"./Switch-CX4XfBjM.js";import"./Label-Bm3Js6Mn.js";import"./useToggleState-OwRq_I9z.js";import"./Overlay-DkFy78FU.js";import"./ButtonView-DDzASKwg.js";import"./Heading-CPSS73-Z.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Vr as default};
