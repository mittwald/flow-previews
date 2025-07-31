import{j as r}from"./iframe-Cf8YTZ8I.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-qh9NwBsS.js";import{L as m}from"./Link-zrzIKBQn.js";import{H as s}from"./HeaderNavigation-XxMhcVWK.js";import{B as o}from"./Button-BNQl0TTz.js";import{T as p}from"./Text-CzCYKR38.js";import{I as C}from"./Image-Ca-VWsa0.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DSqqbjAq.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CB_iahiL.js";import"./ContextMenuSection-9alUKIRu.js";import{a as D,M as G}from"./Modal-BUyGWp4p.js";import{H as E}from"./Heading-wniAMg2X.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DTkA4BUB.js";import"./mergeRefs-D3ggMSJr.js";import"./index-B8aDKTw0.js";import"./useLocalizedStringFormatter-BO4NN1ph.js";import"./context-D-u3TSjV.js";import"./utils-mApyKjAg.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CjpkCDJv.js";import"./useFocus-_Kohxctg.js";import"./useFocusRing-WtizUsSm.js";import"./useFocusable-n963r6Th.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CGCXLsJe.js";import"./Button-BRubt609.js";import"./ProgressBar-rV3H6G0W.js";import"./Label-CYpSb4aj.js";import"./Hidden-CFe2gnmC.js";import"./useLabel-kBnuahGK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-DfZCu7HF.js";import"./EmulatedBoldText-5p9uCxGs.js";import"./Text-CQanMjNI.js";import"./AlertIcon-BV4AMgLi.js";import"./Action-tsI3lj2n.js";import"./context-ByqUf3rB.js";import"./useStatic-B_n6r0Ik.js";import"./getActionGroupSlot-BFOZlr1C.js";import"./Popover-CiGSAkfw.js";import"./DialogTriggerView-CQZB8ThO.js";import"./Dialog-6YoxT38u.js";import"./RSPContexts-Dm9xNQ69.js";import"./OverlayArrow-HeKEp-x3.js";import"./useControlledState-J34_Aqnk.js";import"./Collection-CMDC5_M-.js";import"./CollectionBuilder-CsDuHlxm.js";import"./Separator-DLSAHNez.js";import"./Group-DhHWVTLL.js";import"./SearchField-Diw_8zQw.js";import"./FieldError-CCTqX3Np.js";import"./Form-C0YUiO3s.js";import"./useTextField-Bh5lkpvQ.js";import"./useFormReset-Ctmxo4kM.js";import"./TextField-BlSj4EDo.js";import"./useEvent-ZIquWn1z.js";import"./SelectionManager-CdSvY_6Y.js";import"./useCollator-C0E035kT.js";import"./FocusScope-Bp1tS9Sq.js";import"./VisuallyHidden-CDGiYjfo.js";import"./Switch-CfWdaY-y.js";import"./Label-D1xaprCz.js";import"./useToggleState-D9vno5XO.js";import"./Overlay-ldRQ5q6d.js";import"./Header-jIJY4_kr.js";import"./ButtonView-D00bdOrS.js";import"./Heading-BTyyAlZI.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
