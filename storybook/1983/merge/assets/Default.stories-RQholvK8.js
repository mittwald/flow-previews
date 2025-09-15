import{j as r}from"./iframe-BJ0F67WV.js";import{u as H,a1 as S,_ as b,F as v,a2 as B}from"./IconWarning-D8lhACCL.js";import{L as m}from"./Link-C1_LKXDW.js";import{H as s}from"./HeaderNavigation-Bj5P-xXO.js";import{B as o}from"./Button-CnQZL08m.js";import{T as p}from"./Text-DvcA_djt.js";import{I as C}from"./Image-DdPsXYk1.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-C7qeyCr3.js";import{a as y,C as A,M as c}from"./ContextMenuContent-Bn8daWqo.js";import"./ContextMenuSection-Dlp4NHpV.js";import{a as D,M as G}from"./Modal-BWnD9gjn.js";import{H as _}from"./Heading-B9mg5LEa.js";import"./clsx-B-dksMZM.js";import"./flowComponent-3J-YZQgx.js";import"./index-DnTgiG27.js";import"./index-C5tuckEm.js";import"./useLocalizedStringFormatter-CatcJgnD.js";import"./context-DDk-RgEI.js";import"./utils-CfdyWDg2.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-C0-WYOlY.js";import"./useFocus-N8Qk0gvU.js";import"./useFocusRing-CZqmVUZk.js";import"./useFocusable-k7wU8KZy.js";import"./dynamic-D4EbkcOt.js";import"./LoadingSpinner-s7oSeT27.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CJVv4977.js";import"./ProgressBar-BZfTjKSF.js";import"./Label-BZcf1Nsx.js";import"./Hidden-iBx55YDK.js";import"./useLabel-CE1zHuYM.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-ENr42WFT.js";import"./EmulatedBoldText-CK3yk5uQ.js";import"./Text-DUTh34WN.js";import"./AlertIcon-B6CXCdWd.js";import"./Action-DQsKkgIU.js";import"./context-DqfxRtzM.js";import"./useStatic-BcjnPkg-.js";import"./getActionGroupSlot-DrYIE0ib.js";import"./Popover-Dgu6lEcA.js";import"./DialogTriggerView-NFgxLp1f.js";import"./Dialog-CcAHYHw-.js";import"./RSPContexts-BTU5SObx.js";import"./OverlayArrow--hlAjm0f.js";import"./useControlledState-g4NJV7ij.js";import"./Collection-B8sxr2FE.js";import"./CollectionBuilder-L5ZDKpRe.js";import"./Separator-CMNt12Nc.js";import"./Group-CRkQVq-1.js";import"./SearchField-K6WJ8JUX.js";import"./FieldError-zuZgMzEa.js";import"./Form-aW46NXWl.js";import"./useTextField-DGpbu28C.js";import"./useFormReset-5M8XX6CH.js";import"./TextField-CsP4pSiS.js";import"./useEvent-BEGbzF0p.js";import"./SelectionManager-aRuCxMGp.js";import"./useCollator-ueFTVoBb.js";import"./FocusScope-own16ieq.js";import"./VisuallyHidden-CST8zJDR.js";import"./ControlledNotification-DPl-ua4c.js";import"./Switch-BLQJgmjy.js";import"./Label-DdDrAhKV.js";import"./useToggleState-BStMvCUs.js";import"./Overlay-Dctr127w.js";import"./ButtonView-DHTxrZ8B.js";import"./Heading-BcZio6h0.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(_,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Zr as default};
