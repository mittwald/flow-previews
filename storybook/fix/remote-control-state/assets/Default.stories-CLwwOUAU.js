import{j as r}from"./iframe-CTS_vBBR.js";import{D as k,$ as S,X as b,H as v,a0 as B}from"./IconWarning-fu5B3ESI.js";import{L as m}from"./Link-BRcMbn4K.js";import{H as s}from"./HeaderNavigation-8RYJY0zP.js";import{B as o}from"./Button-BCm6-QqX.js";import{T as p}from"./Text-BLj2iCUU.js";import{I as C}from"./Image-D87_w7Lx.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Dx50nIUm.js";import{a as D,C as y,M as c}from"./ContextMenuContent-wdNW8DO9.js";import"./ContextMenuSection-D2rMPrbP.js";import{a as A,M as G}from"./Modal-xFJj9yuD.js";import{H as E}from"./Heading-0WcYtxfM.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D42A7vMX.js";import"./mergeRefs-BwV9Bpf-.js";import"./index-CHVZ0_DR.js";import"./useLocalizedStringFormatter-PMR3uOGp.js";import"./context-bQBwJTVW.js";import"./utils-jZBUW_kd.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Wiw2pSFm.js";import"./useFocus-TOgYA3QQ.js";import"./useFocusRing-BBi2D29q.js";import"./useFocusable-CKYlOhg9.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-B_uSEYnz.js";import"./Button-Ckv0OeVG.js";import"./ProgressBar-DhYw7mhF.js";import"./Label-Bn0NFPwe.js";import"./Hidden-BZmRwcL-.js";import"./useLabel-ByTznw_u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-CAp200rL.js";import"./EmulatedBoldText-1BeNjxGF.js";import"./Text-obNOHtVo.js";import"./AlertIcon-BO9CLIhS.js";import"./Action--huDMFDn.js";import"./context-Qd68n4pj.js";import"./useStatic-DjQWr1Kz.js";import"./getActionGroupSlot-CnqxasHi.js";import"./Popover-B_yIqzsZ.js";import"./DialogTriggerView-CNjC6RdQ.js";import"./Dialog-Dh-wheuD.js";import"./RSPContexts-Crw6uEAA.js";import"./OverlayArrow-DHDCgEG9.js";import"./useControlledState-Bfc6Wiov.js";import"./Collection-D8tFv91v.js";import"./CollectionBuilder-C2lc3lzM.js";import"./Separator-Cm_kwdR6.js";import"./Input-DWYalt4t.js";import"./SearchField-Bligs5CS.js";import"./FieldError-BrC_mw1K.js";import"./Form-CUREqm_L.js";import"./Group-DV2ZKREv.js";import"./useTextField-B5AiFiGq.js";import"./useFormReset-CIT6qu5J.js";import"./TextField-Dg76NbVN.js";import"./SelectionManager-D97bCv4u.js";import"./useEvent-B-FqLBei.js";import"./useCollator-SPBrq1bE.js";import"./FocusScope-B79Zy1Lp.js";import"./VisuallyHidden-C7PlrqLT.js";import"./Switch-DLhNz-YW.js";import"./Label-CTpKXefw.js";import"./useToggleState-VxdSilQh.js";import"./Overlay-C1wiX0q2.js";import"./Header-D2Fm005t.js";import"./ButtonView-DMKEhv4G.js";import"./Heading-DiZnqYS1.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,H;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,Zr as default};
