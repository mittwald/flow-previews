import{j as r}from"./iframe-D_4x6qMj.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-Dzi10vRl.js";import{L as m}from"./Link-BbtC5HYQ.js";import{H as s}from"./HeaderNavigation-D3xQqL_-.js";import{B as o}from"./Button-CEOuDC8N.js";import{T as p}from"./Text-CweuBtPf.js";import{I as C}from"./Image-DZp5I-8E.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CPGY8mIo.js";import{a as y,C as A,M as c}from"./ContextMenuContent-SleGzQwW.js";import"./ContextMenuSection-C8JEahQ3.js";import{a as D,M as E}from"./Modal-DCiUpw3F.js";import{H as G}from"./Heading-Vf-7-D82.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CALK_gXH.js";import"./mergeRefs-D11WPw_n.js";import"./index-D_JTLils.js";import"./useLocalizedStringFormatter-BlYhncvt.js";import"./context-DM98rbVc.js";import"./utils-xe5YSam6.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-C9nt0YbM.js";import"./useFocus-Drnb5e9K.js";import"./useFocusRing-TvNskxef.js";import"./useFocusable-B8Ri4aea.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-YiUTGVQG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CpmoBq4h.js";import"./ProgressBar-CJC6Hhu1.js";import"./Label-CCRaVzEI.js";import"./Hidden-B0gkrfj6.js";import"./useLabel-CiC867Ap.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CZBg7HNp.js";import"./EmulatedBoldText-B9kAgGNC.js";import"./Text-Cu7PdI7W.js";import"./AlertIcon-CbLBaVjJ.js";import"./Action-B-FwCqpK.js";import"./context-BMDWm5Qc.js";import"./useStatic-BjYYLPCu.js";import"./getActionGroupSlot-NuufWXWm.js";import"./Popover-BPV3PQ88.js";import"./DialogTriggerView-D7SWa1oN.js";import"./Dialog-DPQkTFHJ.js";import"./RSPContexts-bNEpgRFQ.js";import"./OverlayArrow-CvQNm9iK.js";import"./useControlledState-CYhMOmxg.js";import"./Collection-CnzW5hBw.js";import"./CollectionBuilder-NsEnfSHY.js";import"./Separator-DqWrBJRs.js";import"./Group-DiVNF80n.js";import"./SearchField-FNUBcSFK.js";import"./FieldError-DwM-vJJl.js";import"./Form-D0g69-ep.js";import"./useTextField-U9hEKPZN.js";import"./useFormReset-Bck6lqok.js";import"./TextField-DSJ_5HB7.js";import"./useEvent-CxdF7c9o.js";import"./SelectionManager-Dt4Zb6ag.js";import"./useCollator-Bn9eJ8f5.js";import"./FocusScope-CncZTdzF.js";import"./VisuallyHidden-tZR9lL9G.js";import"./Switch-Bdb-As8I.js";import"./Label-DYejL5eD.js";import"./useToggleState-utCasGju.js";import"./Overlay-D6yc5ihy.js";import"./ButtonView-BuK6rvhA.js";import"./Heading-Dnp79pld.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
